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
}
