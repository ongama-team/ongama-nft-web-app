import Web3Service from "./service";
import LocalStorage from "@lib/helper/LocalStorage";

const web3Instance = new Web3Service();

class Web3Actions {
  public async connectBrowserWallet() {
    let signer;
    try {
      signer = await web3Instance.connect();
      LocalStorage.setItem("ongama_signer_address", signer as string);
      return signer;
    } catch {
      return signer;
    }
  }

  public async connectTrustOrConnectWallet() {
    let signer;
    try {
      signer = await web3Instance.walletConnectConnector().getAddress();
      return signer;
    } catch {
      return signer;
    }
  }

  public async connectCoinBaseWallet() {
    let signer;
    try {
      signer = await web3Instance.coinBaseConnect();
      LocalStorage.setItem("ongama_signer_address", signer!);
      return signer;
    } catch {
      return signer;
    }
  }
}

const web3Actions = new Web3Actions();

export default web3Actions;
