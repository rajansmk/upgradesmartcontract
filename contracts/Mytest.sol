// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Testone{
    uint a;
    function initialize(uint256 _x) public {
        a = _x;
    }
    function setvalue(uint _a) public{
        a= a +_a;
    }
    function getvalue() public view returns(uint){
        return a;
    }
}