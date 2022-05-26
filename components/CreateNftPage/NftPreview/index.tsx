/* eslint-disable @next/next/no-img-element */
import React from "react";
import dummy_profile from "@components/DropPage/AvatarAndCover/dummy_profile";
import Card from "@components/modules/__modules__/Card/NftCard";

interface IProps {
  previewUrl: string;
  previewPrice: string;
  previewName: string;
  isImage: boolean;
}

const NftPreview = ({
  previewUrl,
  previewPrice,
  previewName,
  isImage,
}: IProps) => {
  return (
    <div className="mx-5">
      <p className="font-bold">Preview</p>
      <div className="w-60 h-96 border border-gray-300 mt-5 rounded-xl flex flex-col justify-center items-center">
        <p
          className={`text-center px-6 font-semibold text-gray-500 ${
            previewUrl && "hidden"
          }`}
        >
          Upload file to preview your brand new NFT
        </p>
        <div className={`${previewUrl && isImage ? "block" : "hidden"}`}>
          <Card
            nftUrl={previewUrl}
            nftPrice={previewPrice}
            nftName={previewName}
            ownerProfile={dummy_profile.profileImage}
            ownerName={""}
            likes={0}
            auction={""}
          />
        </div>
      </div>
    </div>
  );
};

export default NftPreview;
