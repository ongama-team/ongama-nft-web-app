import React from "react";
import { VSpinner } from "../../_vectors";

interface IProps {
  isProcessing: boolean;
  children?: any;
}

const UploadFileProcessing = ({ isProcessing, children }: IProps) => {
  if (isProcessing) {
    return (
      <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white bg-opacity-70 rounded-full">
        <VSpinner className="animate-spin text-blue-500 text-3xl" />
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default UploadFileProcessing;
