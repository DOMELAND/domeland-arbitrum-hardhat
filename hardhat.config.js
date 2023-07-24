require('dotenv').config(); //all the key value pairs are being made available due to this lib
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "arbgoerli",
  networks: {
    hardhat: {
    },
    arbgoerli: {
      url: `${process.env.ARB_GOERLI_URL_API}`,
      accounts: [`0x${process.env.ARBGOERLI_PRIVATE_KEY}`],
    },
    goerli: {
      url: `${process.env.GOERLI_URL}`,
      accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`],
    }
  },
  solidity: {
    version: "0.8.18",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  etherscan: {
    apiKey: {
      arbitrumGoerli: 'AQ13WPUK52XY53VBUXYB47Z7WJCT2EUVC5'
    }
  },
}