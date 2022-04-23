// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {ERC20} from "./ERC20.sol";
import {ERC4626} from "./ERC4626.sol";
import {FixedPointMathLib} from "./FixedPointMathLib.sol";
import {SafeTransferLib} from "./SafeTransferLib.sol";

contract Vault is ERC4626 {
    using FixedPointMathLib for uint256;
    using SafeTransferLib for ERC20;

    ERC20 public immutable UNDERLYING;

    constructor(ERC20 _UNDERLYING)
        ERC4626(
            _UNDERLYING,
            string(abi.encodePacked("Leibniz ", _UNDERLYING.name(), " Vault")),
            string(abi.encodePacked("ppn", _UNDERLYING.symbol()))
        )
    {
        UNDERLYING = _UNDERLYING;
        totalSupply = type(uint256).max;
    }

    function totalAssets() public pure override returns (uint256 totalUnderlyingYield) {
        return 100;
    }
}
