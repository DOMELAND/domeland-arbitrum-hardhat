require('dotenv').config(); //all the key value pairs are being made available due to this lib
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  defaultNetwork: "arbitrum",
  networks: {
    hardhat: {
    },
    arbitrum: {
      url: `${process.env.ARBITRUM_URL_API_WITHKEY}`,
      accounts: [`0x${process.env.ARBITRUM_PRIVATE_KEY}`],
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
      arbitrumOne: 'RMMWDDH5TJTN2F986ZJX5I1PYU42KMIX29'
    }
  },
}