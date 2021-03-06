import WalletConnectProvider from "@walletconnect/web3-provider";
import { CHAINS_ENV } from "../config/chains";
import LocalStorage from "../helper/LocalStorage";

//  Create WalletConnect Provider
export const connector = new WalletConnectProvider({
  rpc: {
    [CHAINS_ENV.polygon.chainId]: CHAINS_ENV.polygon.nodeRPC,
  },
  qrcode: true,
});

// Subscribe to accounts change
connector.on("accountsChanged", (accounts: string[]) => {
  console.log("account changed");
});

// Subscribe to chainId change
connector.on("chainChanged", (chainId: number) => {
  console.log(chainId);
});

// Subscribe to session disconnection
connector.on("disconnect", (code: number, reason: string) => {
  LocalStorage.removeItem("ongama_signer_address");
});
