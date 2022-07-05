import { TNetworks } from "../@Types/chains";

export const SUPPORTED_CHAINS: TNetworks = {
  testnet: {
    polygon: {
      name: "polygon",
      network: "polygon",
      blockExplorer: "https://mumbai.polygonscan.com/",
      nodeRPC: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      mintContractAddress: process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS!,
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
      mintContractAddress: process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS!,
      currency: "MATIC",
    },
  },
};

export const CHAINS_ENV =
  process.env.NODE_ENV === "production"
    ? SUPPORTED_CHAINS.mainnet
    : SUPPORTED_CHAINS.testnet;
