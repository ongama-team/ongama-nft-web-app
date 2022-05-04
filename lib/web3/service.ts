import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { TChain } from "../../types/chains";
import { CHAINS_ENV } from "../config/chains";
import NFTABI from "./abis/NFT.json";

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
    return signer;
  }

  public async connectTrustWallet() {
    const provider = new WalletConnectProvider({
      rpc: {
        [CHAINS_ENV.polygon.chainId]: CHAINS_ENV.polygon.nodeRPC,
      },
      bridge: "https://bridge.walletconnect.org",
      qrcode: true,
      qrcodeModalOptions: {
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ],
      },
    });

    try {
      await provider.enable();
    } catch (err) {
      console.log("error", err);
    }

    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();

    return signer;
  }
}

export default Web3Service;
