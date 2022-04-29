import Web3Service from "./service";

class Web3Actions {
  public async connectWallet() {
    const web3Instance = new Web3Service();
    const signer = await web3Instance.connect();

    console.log(signer);
  }
}

const web3Actions = new Web3Actions();

export default web3Actions;
