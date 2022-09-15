import {
  VSpinner,
  VCheckFill,
  VPlusCircleFill,
} from "@components/modules/__modules__/_vectors";
import React from "react";

interface IProps {
  errorWhileSendingTransaction: boolean;
  createDropProcessing: boolean;
  dropSavingOnDatabaseFailed: boolean;
  sendStorageFeeProcessing: boolean;
  setIsCreateDropProcessingModal: (value: boolean) => void;
}

const CreateDropProcessingModal = ({
  errorWhileSendingTransaction,
  createDropProcessing,
  dropSavingOnDatabaseFailed,
  sendStorageFeeProcessing,
  setIsCreateDropProcessingModal,
}: IProps) => {
  const onCloseDropProcessingModal = () => {
    setIsCreateDropProcessingModal(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-7 justify-start dark:text-white">
        <div className="flex items-center gap-3">
          {sendStorageFeeProcessing ? (
            <VSpinner className="animate-spin text-blue-500 text-4xl" />
          ) : !errorWhileSendingTransaction ? (
            <VCheckFill className="text-green-600 text-4xl" />
          ) : (
            <VPlusCircleFill className="text-red-600 text-4xl -rotate-45" />
          )}
          <p className="font-bold text-2xl">Waiting of Storage Fee</p>
        </div>

        <div className="flex gap-3 items-center">
          {createDropProcessing ? (
            <VSpinner className="animate-spin text-blue-500 text-4xl" />
          ) : !dropSavingOnDatabaseFailed ? (
            <VCheckFill className="text-green-600  text-4xl" />
          ) : (
            <VPlusCircleFill className="text-red-600 text-4xl -rotate-45" />
          )}
          <div>
            <p className="font-bold text-2xl">Save Drop</p>
          </div>
        </div>
        <button
          onClick={onCloseDropProcessingModal}
          className="border border-gray-200 dark:border-gray-500 dark:hover:border-gray-400 hover:border-gray-300 transition-all font-bold py-3 rounded-md mt-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CreateDropProcessingModal;
