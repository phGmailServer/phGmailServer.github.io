
const hre = require("hardhat");

async function main() {

  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const roboPunksNFT = await RoboPunksNFT.deploy(); // 这里的参数是和合约里的constructor相关的，这里不需要参数，因为那边constructor无传入参数。

  await roboPunksNFT.deployed();

  console.log("RoboPunksNFT deployed to:", roboPunksNFT.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
