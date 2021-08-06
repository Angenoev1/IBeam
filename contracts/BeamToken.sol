// SPDX-License-Identifier: MIT

pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract BeamToken is ERC20, Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    constructor(string memory _name, string memory _symbol, uint256 _totalSupply) ERC20(_name, _symbol) {
        _mint(msg.sender, _totalSupply);
    }

    // *** ONLY OWNER functions ***

    // *** EXTERNAL functions ***

    // *** INTERNAL functions ***

}
