const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TestNFTModule", (m) => {
  const nft = m.contract("TestNFT", ["TestNFT", "TNFT"]);

  return { nft };
});
