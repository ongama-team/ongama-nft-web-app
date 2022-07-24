/* eslint-disable @next/next/no-img-element */
import React, { FC, useState } from "react";
import { VerifiedImg } from "@lib/Resources";
import { DotsVector, HeartVector } from "../../_vectors";
import TimeLeftCard from "../TimeLeftCard";
import { NFTData } from "@lib/models/GeneralModel";
import ShowWidget from "../../ShowWidget";

interface Props {
  likes?: number;
  nft?: NFTData;
  isAuction?: boolean;
  isHotBids?: boolean;
  isBuyAvailable?: boolean;
  useAsPreview?: boolean;
  previewUrl?: string;
  previewName?: string;
  previewPrice?: string;
}

const NFTCard: FC<Props> = ({
  likes = 0,
  nft,
  isAuction,
  isHotBids = false,
  isBuyAvailable = true,
  useAsPreview = false,
  previewUrl,
  previewName,
  previewPrice,
}) => {
  const [isNFTCardOvered, setIsNFTCardOvered] = useState(false);

  const onOverNFTCard = () => {
    setIsNFTCardOvered(true);
  };

  const onOverNFTCardOut = () => {
    setIsNFTCardOvered(false);
  };

  return (
    <div
      onMouseOver={onOverNFTCard}
      onMouseOut={onOverNFTCardOut}
      className="h-fit w-fit mobile:w-full transition-all flex-none border hover:border-2 border-slate-200 dark:border-gray-500 relative p-2 mobile:mr-0 rounded-xl snap-center"
    >
      <section className="h-72 relative">
        <ShowWidget condition={!useAsPreview}>
          <img
            src={nft?.url || nft?.urlCompressed || nft?.urlThumbnail || ""}
            alt={nft?.name}
            className="object-cover rounded-xl shadow-lg border-gray-400 h-80 w-full"
          />
        </ShowWidget>
        <ShowWidget condition={useAsPreview}>
          <img
            src={previewUrl}
            alt={previewName}
            className="w-full h-full object-cover rounded-xl shadow-lg border-gray-400"
          />
        </ShowWidget>

        <div
          className={`
          ${
            isNFTCardOvered
              ? "absolute top-0 left-0 right-0 bottom-0 w-full h-full flex-col justify-center items-center transition-all bg-gradient-to-b from-black/50 rounded-xl text-sm "
              : "hidden transition-all"
          }`}
        >
          <div className="flex justify-between items-center">
            <p className="text-white px-3 py-5 font-bold">Polygon</p>

            <div className="py-2 px-3 right-2 flex justify-center items-center font-bold  m-2-0 text-white mx-3 text-lg bg-black rounded-lg opacity-40">
              <HeartVector className="w-5 h-5 font-bold" />
              <span className=" ml-1 text-sm">{likes}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="items-center mt-7">
        <div className="flex justify-between items-center">
          <ShowWidget condition={!useAsPreview}>
            <div className="flex mr-1 items-center">
              <h2 className="text-sm font-bold mt-2 text-black dark:text-white">
                {nft?.name}
              </h2>
              {nft?.owner.verified && (
                <img src={VerifiedImg.src} alt="verified" className="h-6" />
              )}
            </div>
            <DotsVector
              className="font-black text-gray-400
             mr-3 hover:bg-gray-100 w-8 h-8 p-1 rounded-full mt-2"
            />
          </ShowWidget>

          <ShowWidget condition={useAsPreview}>
            <h2 className="text-sm font-medium mt-2 text-gray-400">
              {previewName}
            </h2>
          </ShowWidget>
        </div>
      </section>

      <section className="h-[18%] flex items-center justify-between bg-slate-100 dark:bg-darkLight rounded-xl mt-2 py-2 px-3">
        <ShowWidget condition={!useAsPreview}>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-thine">
              {!isAuction ? "Price" : "Time left"}
            </p>
            {!isAuction ? (
              <span className="font-semibold dark:text-white">
                {nft?.price} MATIC
              </span>
            ) : (
              <TimeLeftCard />
            )}
          </div>
        </ShowWidget>

        <ShowWidget condition={useAsPreview}>
          <span className="font-semibold dark:text-white">
            {previewPrice} ETH
          </span>
        </ShowWidget>

        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-thine">
            {isAuction ? "Minimum bid" : `${isHotBids ? "Highest bid" : ""}`}
          </p>
          <span className="font-semibold dark:text-white">
            {isAuction ? "15 wETH" : `${isHotBids ? "20 wETH" : "No bids yet"}`}
          </span>
        </div>
      </section>
      <div className={`${!isBuyAvailable && "hidden"}`}>
        <ShowWidget condition={!useAsPreview}>
          {!isAuction ? (
            <button className="w-full mt-2 py-2 px-2 bg-blue-600 hover:bg-blue-700 transition-all text-gray-200 rounded-lg font-semibold">
              Buy Now
            </button>
          ) : (
            <button className="w-full mt-2 py-2 px-2 bg-blue-600 hover:bg-blue-700 transition-all text-gray-200 rounded-lg font-semibold">
              Place a bid
            </button>
          )}
        </ShowWidget>
      </div>
    </div>
  );
};

export default NFTCard;
