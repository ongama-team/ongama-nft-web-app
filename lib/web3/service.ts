import Web3 from "web3";
import { ethers } from "ethers";
import { TChain } from "../@Types/chains";
import { CHAINS_ENV } from "../config/chains";
import NFTABI from "./abis/NFT.json";
import { connectCoinbase } from "./helpers/connecters";
import { connector } from "./walletConnect";
import { SignResult } from "@lib/models/GeneralModel";
import LocalStorage from "@lib/helper/LocalStorage";

class Web3Service {
  public provider;
  public web3Instance: Web3;

  constructor() {
    //  Initial implementation of connecting to the blockchain with an hardcoded chain
    this.provider = new ethers.providers.JsonRpcProvider(
      CHAINS_ENV.polygon.nodeRPC
    );
    this.web3Instance = new Web3(Web3.givenProvider || "http://localhost:8545");
  }

  public contract(chain: TChain = "polygon") {
    const network = this.getChainByName(chain);

    const signer = new ethers.providers.Web3Provider(
      this.web3Instance.givenProvider
    ).getSigner(LocalStorage.getItem("ongama_signer_address")!);

    return new ethers.Contract(network.mintContractAddress, NFTABI.abi, signer);
  }

  public getChainByName(chain: TChain = "polygon") {
    return CHAINS_ENV[chain];
  }

  /**
   * Hey folks, this is just the initial way of connecting wallet with support to MetaMask.
   * It should be improved to support other wallets.
   * @returns signer - The currently connected user
   */
  public async connect() {
    if (window && !window?.ethereum)
      return new Error("Browser does not support Web3");

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const walletAddress = await signer.getAddress();

    return walletAddress;
  }

  public async coinBaseConnect() {
    const connectCoinbaseWallet = await connectCoinbase();
    return connectCoinbaseWallet;
  }

  public async walletConnectConnector() {
    try {
      await connector.enable();
      const provider = new ethers.providers.Web3Provider(connector);
      const signer = provider.getSigner();

      const walletAddress = await signer.getAddress();

      return walletAddress;
    } catch (error) {
      console.log("Trust wallet error", error);
    }
  }

  public async signPersonalMessage(
    data: string,
    address: string
  ): Promise<SignResult | null> {
    let signer: any;
    try {
      const web3 = this.web3Instance;
      const hashedData = web3.utils.sha3(data);
      const signature = await web3.eth.personal.sign(hashedData!, address, "");
      return {
        signature,
        data,
      };
    } catch (e) {
      console.log("error :", e);
      return null;
    }
  }

  public async sendStorageFee() {
    const transaction = await this.web3Instance.eth.sendTransaction(
      {
        from: LocalStorage.getItem("ongama_signer_address")!,
        to: process.env.NEXT_PUBLIC_STORAGE_FEE_RECEIVER_ADRESS!,
        value: this.web3Instance.utils.toWei(
          `${process.env.NEXT_PUBLIC_STORAGE_FEE}`,
          "ether"
        ),
        gas: 21000,
      },
      (err) => {
        if (err) {
          console.log("send storage fee error", err);
          return null;
        }
      }
    );

    return transaction;
  }
}
export default Web3Service;
