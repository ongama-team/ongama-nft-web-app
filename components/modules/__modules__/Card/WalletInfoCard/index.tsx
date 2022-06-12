import React from "react";
import { VEthereum } from "../../_vectors";

interface IProps {
  truncatedWalletAddress: string;
  walletBalance?: string;
}

const WalletInfoCard = ({ truncatedWalletAddress, walletBalance }: IProps) => {
  return (
    <div className="my-5 py-5 border border-gray-300 flex items-center rounded-xl hover:cursor-not-allowed">
      <p className="mx-2 p-2 text-blue-500 text-xl bg-blue-100 rounded-full">
        <VEthereum />
      </p>
      <div className="mx-5 mobile:mx-1">
        <p>
          <span className="font-bold">{truncatedWalletAddress}</span>
          <span className="px-2 bg-green-100 mx-2 py-1 text-xs text-green-700 rounded-lg">
            Connected
          </span>
        </p>
        <p className="font-bold text-gray-500">
          Ethereum
          <span className="px-2">{walletBalance}</span>
        </p>
      </div>
    </div>
  );
};

export default WalletInfoCard;
