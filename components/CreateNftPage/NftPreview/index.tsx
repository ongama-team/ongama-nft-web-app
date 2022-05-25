/* eslint-disable @next/next/no-img-element */
import React from "react";

interface IProps {
  previewUrl: string;
}

const NftPreview = ({ previewUrl }: IProps) => {
  return (
    <div className="rounded-2xl mx-5">
      <p className="font-bold">Preview</p>
      <div className="w-60 h-96 border border-gray-300 mt-5 rounded-2xl flex justify-center items-center">
        <p
          className={`text-center px-6 font-semibold text-gray-500 ${
            previewUrl && "hidden"
          }`}
        >
          Upload file to preview your brand new NFT
        </p>
        <img
          src={previewUrl}
          alt="nft preview"
          className={`${previewUrl ? "" : "hidden"}`}
        />
      </div>
    </div>
  );
};

export default NftPreview;
