import { ethers } from "ethers";
import { TChain } from "../../types/chains";
import { CHAINS_ENV } from "../config/chains";
import NFTABI from "../web3/abis/NFT.json";
class Web3Instance {
  public provider;

  constructor() {
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
}

export default Web3Instance;
