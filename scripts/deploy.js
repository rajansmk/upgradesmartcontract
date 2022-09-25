
const { ethers, upgrades } = require("hardhat");

async function main() {
  //const contract= await hre.ether
  const Box = await ethers.getContractFactory("Testone");
  //const box = await upgrades.deployProxy(Box, [42]);
  const box = await upgrades.deployProxy(Box,[100]);
  await box.deployed();
  console.log("Box deployed to:", box.address);
  //0x703227a293c373603615002F9dC165102EB83080
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
