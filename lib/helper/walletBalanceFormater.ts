import { ethers } from "ethers";

const balanceFormater = (walletBalance) => {
  if (!walletBalance) return "";
  return ethers.utils.formatEther(walletBalance);
};

export default balanceFormater;
