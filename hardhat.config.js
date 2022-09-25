require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    ganache:{
      url :"HTTP://127.0.0.1:7545",
    },
    hardhat:{

    },
    rinkeby :{
      url :"",
      accounts:[]
    },
  }
};
