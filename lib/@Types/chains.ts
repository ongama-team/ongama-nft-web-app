export type TChain = "polygon";

export interface IChainInfo {
  name: TChain;
  network: string;
  nodeRPC: string;
  blockExplorer: string;
  chainId: number;
  mintContractAddress: string;
  currency: string;
}

export type TSupportedChains = Record<TChain, IChainInfo>;

export type TNetworks = Record<"testnet" | "mainnet", TSupportedChains>;
