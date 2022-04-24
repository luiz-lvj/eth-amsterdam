// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {ERC20} from "./lib/ERC20.sol";
import {ERC4626} from "./lib/ERC4626.sol";
import {FixedPointMathLib} from "./lib/FixedPointMathLib.sol";
import {SafeTransferLib} from "./lib/SafeTransferLib.sol";

contract Vault is ERC4626 {
    using FixedPointMathLib for uint256;

    ERC20 public immutable underlyingToken;

    constructor(ERC20 _underlyingToken) ERC4626(
        _underlyingToken,
        "Leibniz Vault",
        "PPN"
    ) {
        underlyingToken = _underlyingToken;
        totalSupply = type(uint256).max;
    }
    
   function afterDeposit(uint256, uint256) internal override {}

    function beforeWithdraw(uint256 assets, uint256) internal override {
        retrieveUnderlying(assets);
    }

    function retrieveUnderlying(uint256 underlyingAmount) internal {
        uint256 float = totalFloat();

        if (underlyingAmount > float) {
            uint256 floatMissingForTarget = (totalAssets() - underlyingAmount).mulWadDown(targetFloatPercent);
            uint256 floatMissingForWithdrawal = underlyingAmount - float;
            pullFromWithdrawalStack(floatMissingForWithdrawal + floatMissingForTarget);
        }
    }

    function balanceOfUnderlying(address user) external view returns (uint256) {
        return balanceOf[user].mulDivDown(exchangeRate(), BASE_UNIT);
    }

    function exchangeRate() public view returns (uint256) {
        uint256 rvTokenSupply = totalSupply;
        if (rvTokenSupply == 0) return BASE_UNIT;
        return totalAssets().mulDivDown(BASE_UNIT, rvTokenSupply);
    }

    function totalAssets() public view override returns (uint256 totalUnderlyingHeld) {
        unchecked {
            totalUnderlyingHeld = totalStrategyHoldings - lockedProfit();
        }
        totalUnderlyingHeld += totalFloat();
    }

    function lockedProfit() public view returns (uint256) {
        uint256 previousHarvest = lastHarvest;
        uint256 harvestInterval = harvestDelay;

        unchecked {
            if (block.timestamp >= previousHarvest + harvestInterval)
                return 0;
            uint256 maximumLockedProfit = maxLockedProfit;
            return maximumLockedProfit - (maximumLockedProfit * (block.timestamp - previousHarvest)) / harvestInterval;
        }
    }

    function totalFloat() public view returns (uint256) {
        return UNDERLYING.balanceOf(address(this));
    }

    event Initialized(address indexed user);
    bool public isInitialized;

    function initialize() external requiresAuth {
        require(!isInitialized, "ALREADY_INITIALIZED");

        isInitialized = true;
        totalSupply = 0;
        emit Initialized(msg.sender);
    }

    function destroy() external requiresAuth {
        selfdestruct(payable(msg.sender));
    }
}
