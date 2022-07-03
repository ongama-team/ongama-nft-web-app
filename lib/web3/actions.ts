import Web3Service from "./service";
import LocalStorage from "@lib/helper/LocalStorage";
import Web3 from "web3";

const web3Instance = new Web3Service(Web3);

class Web3Actions {
  public async connectBrowserWallet() {
    let signer: any;

    try {
      signer = await web3Instance.connect();

      console.log("==>", signer);
      LocalStorage.setItem("ongama_signer_address", signer);
      return signer;
    } catch {
      return signer;
    }
  }

  public async connectTrustOrConnectWallet() {
    let signer;
    try {
      signer = await web3Instance.walletConnectConnector();
      console.log("trust wallet Signer", signer);

      LocalStorage.setItem("ongama_signer_address", signer);
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
