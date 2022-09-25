const hre=require("hardhat");
const test =require("../artifacts/contracts/Mytesttwo.sol/Testtwo.json");

async function main(){
  const [owner] = await ethers.getSigners();
  contractwrites =await new ethers.Contract('0x703227a293c373603615002F9dC165102EB83080', test.abi, owner);
  const tx=await contractwrites.getvalue();
  console.log(tx.toString());
  const vx=await contractwrites.editvalue(25);
  const kx=await contractwrites.getvalue();
  console.log(kx.toString());
  


}
main().catch(
  (error)=>{
    console.log(error);
    process.exitCode=1;
  }
);