import truncateAddress from "@lib/helper/truncateAddress";
import React, { useState } from "react";
import { Ethereum } from "../../_vectors";

interface IProps {
  walletAddress: string;
}

const CopingAddressCard = ({ walletAddress }: IProps) => {
  const [addressCopied, setAddressCopied] = useState(false);
  const onCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };
  return (
    <div className="flex justify-center items-center space-x-2 bg-opacity-30 bg-gray-300 p-2 rounded-full">
      <Ethereum className="w-4 h-4" />
      <p
        onClick={onCopyAddress}
        className="font-ibmPlexSans font-semibold text-gray-500 dark:text-gray-200 px-1 text-xs cursor-pointer hover:text-gray-700 transition-all"
      >
        {!addressCopied ? (
          <span>{truncateAddress(walletAddress, 10)}</span>
        ) : (
          <span className="text-green-600 font-bold">copied</span>
        )}
      </p>
    </div>
  );
};

export default CopingAddressCard;
