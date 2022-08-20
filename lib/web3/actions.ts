import Web3Service from "./service";
import LocalStorage from "@lib/helper/LocalStorage";

const web3Services = new Web3Service();

class Web3Actions {
  public async connectBrowserWallet() {
    let signer: any;

    try {
      signer = await web3Services.connect();

      console.log("==>", signer);
      LocalStorage.setItem("ongama_signer_address", signer);
      return signer;
    } catch {
      return signer;
    }
  }

  public async disconnectBrowserWallet() {
    await web3Services.disconnect();

    LocalStorage.removeItem("ongama_signer_address");
  }

  public async connectTrustOrConnectWallet() {
    let signer;
    try {
      signer = await web3Services.walletConnectConnector();
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
      signer = await web3Services.coinBaseConnect();
      LocalStorage.setItem("ongama_signer_address", signer!);
      return signer;
    } catch {
      return signer;
    }
  }

  public async mintNft(tokenUri: string, address: string, price: number) {
    const formatedPrice = web3Services.web3Instance.utils.toWei(
      `${price}`,
      "ether"
    );

    try {
      const mintResult = await web3Services
        .contract()
        .mint(tokenUri, address, formatedPrice);

      return mintResult;
    } catch (err) {
      console.log("error in minting =>", err);
      return null;
    }
  }

  public async updateNftPrice(tokenId: number, newPrice: number) {
    const formatedPrice = web3Services.web3Instance.utils.toWei(
      `${newPrice}`,
      "ether"
    );

    try {
      const isUpdated = await web3Services
        .contract()
        .updatePrice(tokenId, formatedPrice);

      //-------- wait the transaction confirmation -------//
      await isUpdated.wait();

      return isUpdated;
    } catch (err) {
      console.log("update price failed", err);

      return false;
    }
  }
}

const web3Actions = new Web3Actions();

export default web3Actions;
