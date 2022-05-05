import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Web3 from "web3";
import { CHAINS_ENV } from "../../config/chains";

const APP_NAME = "ongama-nft-marketplace";
const APP_LOGO_URL = "";
const DEFAULT_ETH_JSONRPC_URL = CHAINS_ENV.polygon.nodeRPC;
const DEFAULT_CHAIN_ID = CHAINS_ENV.polygon.chainId;

export const connectCoinbase = async () => {
  try {
    const coinbaseWallet = new CoinbaseWalletSDK({
      appName: APP_NAME,
      appLogoUrl: APP_LOGO_URL,
      darkMode: false,
    });

    const provider = coinbaseWallet.makeWeb3Provider(
      DEFAULT_ETH_JSONRPC_URL,
      DEFAULT_CHAIN_ID
    );
    const web3 = new Web3(provider as any);
    const accounts: string[] = await provider.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    return account;
  } catch (ex) {
    console.log(ex);
  }
};
// const disconnectCoinbase = () => {
// 	coinbaseWallet.close();
// 	coinbaseWallet(null);
// };
