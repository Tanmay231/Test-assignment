const { expect } = require("chai");
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("TestNFT", function () {
  async function deployNFTFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("TestNFT");
    const nft = await NFT.deploy("TestNFT", "TNFT");
    return { nft, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right name and symbol", async function () {
      const { nft } = await loadFixture(deployNFTFixture);
      expect(await nft.name()).to.equal("TestNFT");
      expect(await nft.symbol()).to.equal("TNFT");
    });

    it("Should set the right owner", async function () {
      const { nft, owner } = await loadFixture(deployNFTFixture);
      expect(await nft.owner()).to.equal(owner.address);
    });
  });

  describe("Minting", function () {
    describe("Validations", function () {
      it("Should mint a new token with correct tokenURI", async function () {
        const { nft, owner } = await loadFixture(deployNFTFixture);
        const tokenURI = "ipfs://QmTest";
        await nft.mint(tokenURI);
        expect(await nft.ownerOf(0)).to.equal(owner.address);
        expect(await nft.tokenURI(0)).to.equal(tokenURI);
      });

      it("Should increment token ID correctly", async function () {
        const { nft } = await loadFixture(deployNFTFixture);
        await nft.mint("ipfs://QmTest1");
        await nft.mint("ipfs://QmTest2");
        expect(await nft.ownerOf(1)).to.equal(await nft.owner());
      });

      it("Should allow any address to mint", async function () {
        const { nft, otherAccount } = await loadFixture(deployNFTFixture);
        await nft.connect(otherAccount).mint("ipfs://QmTest");
        expect(await nft.ownerOf(0)).to.equal(otherAccount.address);
      });
    });

    describe("Events", function () {
      it("Should emit Transfer event on mint", async function () {
        const { nft, owner } = await loadFixture(deployNFTFixture);
        await expect(nft.mint("ipfs://QmTest"))
          .to.emit(nft, "Transfer")
          .withArgs(ethers.ZeroAddress, owner.address, 0);
      });
    });
  });

  describe("Token URI", function () {
    it("Should return correct URI for minted token", async function () {
      const { nft } = await loadFixture(deployNFTFixture);
      const tokenURI = "ipfs://QmTest";
      await nft.mint(tokenURI);
      expect(await nft.tokenURI(0)).to.equal(tokenURI);
    });

    it("Should revert when querying URI for non-existent token", async function () {
      const { nft } = await loadFixture(deployNFTFixture);
      await expect(nft.tokenURI(0)).to.be.revertedWithCustomError(
        nft,
        "TokenDoesNotExist"
      );
    });
  });
});
