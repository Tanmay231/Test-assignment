require("@nomicfoundation/hardhat-verify");
const hre = require("hardhat");

async function main() {
  const nftAddress = "0x5d9BA0fd93Bbd3891a6242C162fe7C7095699071";

  try {
    await hre.run("verify:verify", {
      address: nftAddress,
      constructorArguments: ["TestNFT", "TNFT"],
      contract: "contracts/TestNFT.sol:TestNFT",
    });
    console.log("Verification completed!");
  } catch (error) {
    console.log("Verification failed:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
