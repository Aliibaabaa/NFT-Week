const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const metadataURL = "ipfs://QmYG4p56PusVwBAzCHGzfcDz4e7tdsqDnBBwAgRGuayZzM";

  const NFTCollContract = await hre.ethers.deployContract("NFTColl", [
    metadataURL
  ]);

  await NFTCollContract.waitForDeployment();

  console.log("NFTColl Contract Address:", NFTCollContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //NFTColl Contract Address: 0xcb3ec0f05af2aF9ef597D8E1F0F3689A301752EA