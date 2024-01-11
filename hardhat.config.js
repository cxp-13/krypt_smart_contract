require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: `YOUR_ALCHEMY_PROVIDER_APIA`,
      accounts: [`YOUR_PRIVATE_KEY`]
    },
  }
};
