import Web3Service from "./service";

const web3Instance = new Web3Service();

class Web3Actions {
  public async connectWallet() {
    const signer = await web3Instance.connect();

    console.log(signer);
  }

  public async connectTrustWallet() {
    const trustWalletSigner = await web3Instance.walletConnectConnector();
    console.log("trust wallet Singer", trustWalletSigner);
  }
}

const web3Actions = new Web3Actions();

export default web3Actions;
