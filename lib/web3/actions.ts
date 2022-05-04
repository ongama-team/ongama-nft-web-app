import Web3Service from "./service";

class Web3Actions {
  public async connectWallet() {
    const web3Instance = new Web3Service();
    const signer = await web3Instance.connect();

    console.log(signer);
  }

  public async connectTrustWallet() {
    const web3Instance = new Web3Service();
    const trustWallerSigner = await web3Instance.connectTrustWallet();

    console.log("Trust Wallet Signer", trustWallerSigner);
  }
}

const web3Actions = new Web3Actions();

export default web3Actions;
