const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const MyTokenContract = await hre.ethers.deployContract("MyToken", "0xcb3ec0f05af2aF9ef597D8E1F0F3689A301752EA");

  await MyTokenContract.waitForDeployment();
  console.log("MyToken Contract Address:", MyTokenContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });