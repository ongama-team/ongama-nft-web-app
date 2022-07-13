/* eslint-disable @next/next/no-img-element */
import React from "react";
import dummy_profile from "@components/DropPage/AvatarAndCover/dummy_profile";
import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import { NFT, NFTData } from "@lib/models/GeneralModel";

interface IProps {
  previewUrl: string;
  previewPrice: string;
  previewName: string;
  isImage: boolean;
}

const NftPreview = ({
  previewUrl,
  previewName,
  previewPrice,
  isImage,
}: IProps) => {
  const { avatarUrl } = dummy_profile.user;
  return (
    <div className="mx-5">
      <p className="font-bold">Preview</p>
      <div
        className={`w-60 ${
          previewUrl
            ? "h-fit dark:border-darkPrimary"
            : "h-96 border border-gray-300 dark:border-gray-500 mt-5 rounded-xl flex flex-col justify-center items-center"
        } `}
      >
        <p
          className={`text-center px-6 font-semibold text-gray-500 ${
            previewUrl && "hidden"
          }`}
        >
          Upload file to preview your brand new NFT
        </p>
        <div className={previewUrl && isImage ? "block  mt-5" : "hidden"}>
          <NFTCard
            previewUrl={previewUrl}
            previewPrice={previewPrice}
            previewName={previewName}
            useAsPreview={true}
            // ownerAvatarUrl={avatarUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default NftPreview;
