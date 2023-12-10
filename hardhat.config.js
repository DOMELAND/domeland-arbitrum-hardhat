require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

// const GOERLI_TESTNET_PRIVATE_KEY = '';
const ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY = 'XXXXXXXXXX';    // <- this should **not** begin with "0x"

module.exports = {
  defaultNetwork: "arbitrumOne",
  networks: {
    hardhat: {
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY],
    },
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
      arbitrumOne: 'AQ13WPUK52XY53VBUXYB47Z7WJCT2EUVC5'
    }
  },
}