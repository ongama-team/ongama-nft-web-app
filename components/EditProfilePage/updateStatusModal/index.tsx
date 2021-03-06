import { VSpinner } from "@components/modules/__modules__/_vectors";
import React from "react";

interface IProps {
  updateSuccess?: boolean;
  onTryAgain?: () => Promise<void>;
  onCloseStatusModal: () => void;
  children?: any;
  isProcessing?: boolean;
}

const StatusContainer = ({
  onCloseStatusModal,
  children,
  isProcessing,
}: IProps) => {
  return (
    <div className="fixed h-full w-full bg-black bg-opacity-40 top-0 left-0 bottom-0 right-0 flex justify-center items-center backdrop-blur-sm z-20">
      <div className="flex flex-col bg-white dark:bg-darkPrimary p-10 items-center justify-center rounded-lg mobile:w-full mobile:mx-5">
        {isProcessing ? (
          <VSpinner className="text-4xl text-blue-500 animate-spin" />
        ) : (
          children
        )}
        <button
          onClick={onCloseStatusModal}
          className={`w-full border border-gray-200 dark:border-gray-500 dark:text-white hover:border-gray-400 transition-all hover:scale-105 font-bold py-2 my-2 rounded-lg ${
            isProcessing && "hidden"
          }`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const UpdateStatusModal = ({
  updateSuccess,
  onTryAgain,
  onCloseStatusModal,
  isProcessing,
}: IProps) => {
  return (
    <StatusContainer
      onCloseStatusModal={onCloseStatusModal}
      isProcessing={isProcessing}
    >
      {updateSuccess ? (
        <>
          <p className="text-5xl pb-3">✨</p>
          <p className="w-80 text-center py-5 mobile:w-64 dark:text-white">
            Your profile was successfully updated. The updates are now visible
            for everyone!
          </p>
        </>
      ) : (
        <>
          <p className="text-5xl pb-3">😞</p>
          <p className="w-80 text-center py-5 mobile:w-64 dark:text-white">
            Something went wrong when trying to update your profile . Try again
            or try later.
          </p>
          <button
            onClick={onTryAgain}
            className="w-full bg-blue-500 text-white font-bold py-2 my-2 rounded-lg hover:scale-105 hover:bg-blue-600 transition-all"
          >
            Try again
          </button>
        </>
      )}
    </StatusContainer>
  );
};

export default UpdateStatusModal;
