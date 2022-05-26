import { TNetworks } from "../@Types/chains";

export const SUPPORTED_CHAINS: TNetworks = {
  testnet: {
    polygon: {
      name: "polygon",
      network: "polygon",
      blockExplorer: "https://mumbai.polygonscan.com/",
      nodeRPC: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      mintContractAddress: "0xD96250D736642a487366170acd7823d8038Df212",
      currency: "MATIC",
    },
  },
  mainnet: {
    polygon: {
      name: "polygon",
      network: "polygon",
      blockExplorer: "https://polygonscan.com/",
      nodeRPC: "https://polygon-rpc.com/",
      chainId: 137,
      mintContractAddress: "0xCd494673999194365033D7A287af9f0a3b163874",
      currency: "MATIC",
    },
  },
};

export const CHAINS_ENV =
  process.env.NODE_ENV === "production"
    ? SUPPORTED_CHAINS.mainnet
    : SUPPORTED_CHAINS.testnet;
