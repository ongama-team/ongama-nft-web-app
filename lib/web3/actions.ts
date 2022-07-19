import Web3Service from "./service";
import LocalStorage from "@lib/helper/LocalStorage";
import Web3 from "web3";

const web3Instance = new Web3Service();

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

  //--------------------- this's the function that handles the mint nft from smart contract ------//
  public async mintNft(tokenUri: string, address: string, price: number) {
    const formatedPrice = web3Instance.web3Instance.utils.toWei(
      `${price}`,
      "ether"
    );

    try {
      const mintResult = await web3Instance
        .contract()
        .mint(tokenUri, address, formatedPrice);

      return mintResult;
    } catch (err) {
      console.log("error in minting =>", err);
      return null;
    }
  }

  public async updateNftPrice(tokenUri: string, newPrice: number) {
    const formatedPrice = web3Instance.web3Instance.utils.toWei(
      `${newPrice}`,
      "ether"
    );

    try {
      const isUpdated = await web3Instance
        .contract()
        .updatePrice(tokenUri, formatedPrice);
      return isUpdated;
    } catch (err) {
      console.log("update price failed", err);
      return false;
    }
  }
}

const web3Actions = new Web3Actions();

export default web3Actions;
