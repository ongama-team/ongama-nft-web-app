import Web3Service from "./service";
import LocalStorage from "@lib/helper/LocalStorage";

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
        .mint(tokenUri, address, formatedPrice, { from: address });

      return mintResult;
    } catch (err) {
      console.log("error in minting =>", err);
      return null;
    }
  }
}

const web3Actions = new Web3Actions();

export default web3Actions;
