import LocalStorage from "@lib/helper/LocalStorage";
import { ethers, VoidSigner } from "ethers";
import { TChain } from "../../types/chains";
import { CHAINS_ENV } from "../config/chains";
import NFTABI from "./abis/NFT.json";
import { connectCoinbase } from "./helpers/connecters";
import { connector } from "./walletConnect";

class Web3Service {
  public provider;

  constructor() {
    //  Initial implementation of connecting to the blockchain with an hardcoded chain
    this.provider = new ethers.providers.JsonRpcProvider(
      CHAINS_ENV.polygon.nodeRPC
    );
  }

  public contract(chain: TChain = "polygon") {
    const network = this.getChainByName(chain);
    return new ethers.Contract(
      network.mintContractAddress,
      NFTABI,
      this.provider
    );
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
    const signerWalletAddress = await signer.getAddress();
    return signerWalletAddress;
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
      return signer;
    } catch (error) {
      console.log("Trust wallet error", error);
    }
  }
}
export default Web3Service;
