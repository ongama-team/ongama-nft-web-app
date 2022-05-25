import React from "react";

const NftPreview = () => {
  return (
    <div className="rounded-2xl mx-5">
      <p className="font-bold">Preview</p>
      <div className="w-60 h-96 border border-gray-300 mt-5 rounded-2xl flex justify-center items-center">
        <p className="text-center px-6 font-semibold text-gray-500">
          Upload file to preview your brand new NFT
        </p>
        {/* <img src="" alt="nft preview" /> */}
      </div>
    </div>
  );
};

export default NftPreview;
