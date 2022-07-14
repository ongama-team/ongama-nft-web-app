import {
  VCheckFill,
  VPlusCircleFill,
  VSpinner,
} from "@components/modules/__modules__/_vectors";
import React, { useEffect } from "react";

export const PENDING_STATUS = "pending";
export const SUCCED_STATUS = "succeed";
export const ERROR_STATUS = "error";

interface IProps {
  sendStorageFeeStatus: string;
  mintNftStatus: string;
  mintError: boolean;
  onPutOnMarket: () => Promise<void>;
  onMintAgain: () => Promise<void>;
  onCancel: () => void;
}

const CreateNftProcessModal = ({
  sendStorageFeeStatus,
  mintNftStatus,
  onPutOnMarket,
  mintError,
  onMintAgain,
  onCancel,
}: IProps) => {
  return (
    <div className="fixed bg-black bg-opacity-40 top-0 lef-0 bottom-0 right-0 w-full h-full z-30 flex justify-center items-center">
      <div className="bg-white w-fit p-5 rounded-lg flex flex-col gap-5 mx-5 dark:bg-darkPrimary dark:text-white">
        <div className="flex gap-3 items-center">
          {sendStorageFeeStatus === PENDING_STATUS ? (
            <VSpinner className="animate-spin text-blue-500 text-4xl" />
          ) : sendStorageFeeStatus === SUCCED_STATUS ? (
            <VCheckFill className="text-green-600 text-4xl" />
          ) : (
            sendStorageFeeStatus === ERROR_STATUS && (
              <VPlusCircleFill className="text-red-600 text-4xl -rotate-45" />
            )
          )}
          <p className="font-bold text-2xl">Waiting of Storage Fee</p>
        </div>
        <div className="flex gap-3 items-center">
          {mintNftStatus === PENDING_STATUS ? (
            <VSpinner className="animate-spin text-blue-500 text-4xl" />
          ) : mintNftStatus === SUCCED_STATUS ? (
            <VCheckFill className="text-green-600  text-4xl" />
          ) : (
            mintNftStatus === ERROR_STATUS && (
              <VPlusCircleFill className="text-red-600 text-4xl -rotate-45" />
            )
          )}
          <div>
            <p className="font-bold text-2xl">Mint</p>
            <p className="text-gray-500 font-semibold py-1">
              Send transaction to create your NFT
            </p>
          </div>
        </div>
        {!mintError ? (
          <button
            className="bg-blue-600 px-8 py-3 rounded-lg text-white font-bold hover:bg-blue-500 transition-all disabled:bg-opacity-50"
            onClick={onPutOnMarket}
            disabled={
              sendStorageFeeStatus === ERROR_STATUS ||
              mintNftStatus === ERROR_STATUS ||
              sendStorageFeeStatus === PENDING_STATUS ||
              mintNftStatus === PENDING_STATUS
            }
          >
            Put on Market
          </button>
        ) : (
          <div className="flex flex-col gap-3">
            <button
              className="bg-red-600 px-8 py-3 rounded-lg text-white font-bold hover:bg-red-700 transition-all"
              onClick={onMintAgain}
            >
              Try again
            </button>
            <button
              className="border border-red-600 px-8 py-3 rounded-lg text-white font-bold hover:border-red-700 transition-all"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNftProcessModal;
