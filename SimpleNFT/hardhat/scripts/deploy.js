const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const SimpleNFTContract = await hre.ethers.deployContract("SimpleNFT");

  await SimpleNFTContract.waitForDeployment();
  console.log("SimpleNFT Contract Address:", SimpleNFTContract.target);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  //SimpleNFT Contract Address: 0xDAD19BbA9cF9F68858DE94FdFB9A72759Cc7dBB4
//Successfully verified contract SimpleNFT on Etherscan.
//https://mumbai.polygonscan.com/address/0xDAD19BbA9cF9F68858DE94FdFB9A72759Cc7dBB4#code