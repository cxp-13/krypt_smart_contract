require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/8k908hllK_5nCAqNqqH1W6kZGxY_FpBG`,
      accounts: [`641943fa6c3fab18fed274c2b3194f0d71383ecfb9a58b2d70188e693c245510`]
    },
  }
};
