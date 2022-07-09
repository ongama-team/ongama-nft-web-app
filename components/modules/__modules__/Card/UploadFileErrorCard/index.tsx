import React from "react";

interface IProps {
  onTryToReuploadFile: (e) => void;
  className: string;
}

const UploadFileErrorCard = ({ onTryToReuploadFile, className }: IProps) => {
  return (
    <div className={className}>
      <p className="text-red-600 text-sm text-center">Some Thing went wrong</p>
      <button
        className="bg-red-600 text-white w-full py-2 px-2 rounded-lg"
        onClick={onTryToReuploadFile}
      >
        Try again
      </button>
    </div>
  );
};

export default UploadFileErrorCard;
