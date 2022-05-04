import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
  4: "https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
};

export function resetWalletConnector(connector: {
  walletConnectProvider: undefined;
}) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined;
  }
}

//coinbase
export const walletLink = new WalletLinkConnector({
  url: RPC_URLS[4],
  appName: "ongama-nft-marketplace",
  supportedChainIds: [1, 4],
});
