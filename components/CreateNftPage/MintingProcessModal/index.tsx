import { VCheckFill, VSpinner } from "@components/modules/__modules__/_vectors";
import React, { useEffect } from "react";

interface IProps {
  isUploading: boolean;
  isUploadingSucceed: boolean;
  isWaitingForStorageFee: boolean;
  isWaitingForStorageSucceed: boolean;
  isMinting: boolean;
  isMintingSucceed: boolean;
  isProcessFailed: boolean;
}

const MintingProcessModal = ({
  isUploading,
  isUploadingSucceed,
  isWaitingForStorageFee,
  isWaitingForStorageSucceed,
  isMinting,
  isMintingSucceed,
  isProcessFailed,
}: IProps) => {
  useEffect(() => {
    console.log("upload status", isUploading);
  }, [isUploading]);
  return (
    <div className="fixed bg-black bg-opacity-40 top-0 lef-0 bottom-0 right-0 w-full h-full z-30 flex justify-center items-center">
      <div className="bg-white w-fit p-5 rounded-lg flex flex-col gap-5 mx-5">
        <div className="flex gap-3 items-center">
          {isUploading ? (
            <VSpinner className="animate-spin text-blue-500 text-4xl" />
          ) : (
            <VCheckFill
              className={`${
                !isUploading && isUploadingSucceed
                  ? "text-green-600"
                  : "text-gray-400"
              } text-4xl`}
            />
          )}

          <div>
            <p className="font-bold text-2xl">Upload</p>
            <p className="text-gray-500 font-semibold py-1">
              Uploading of all media assets and metadata to IPFS
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          {isWaitingForStorageFee ? (
            <VSpinner className="animate-spin text-blue-500 text-4xl" />
          ) : (
            <VCheckFill
              className={`${
                !isWaitingForStorageFee && isWaitingForStorageSucceed
                  ? "text-green-600"
                  : "text-gray-400"
              } text-4xl`}
            />
          )}
          <p className="font-bold text-2xl">Waiting of Storage Fee</p>
        </div>
        <div className="flex gap-3 items-center">
          {isMinting ? (
            <VSpinner className="animate-spin text-blue-500 text-4xl" />
          ) : (
            <VCheckFill
              className={`${
                !isMinting && isMintingSucceed
                  ? "text-green-600"
                  : "text-gray-400"
              } text-4xl`}
            />
          )}
          <div>
            <p className="font-bold text-2xl">Mint</p>
            <p className="text-gray-500 font-semibold py-1">
              Send transaction to create your NFT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintingProcessModal;
