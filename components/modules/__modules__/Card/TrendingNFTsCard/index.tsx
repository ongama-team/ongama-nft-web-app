/* eslint-disable @next/next/no-img-element */
import React, { FC, useState } from "react";
import { VerifiedImg } from "@lib/Resources";
import { DotsVector, HeartVector } from "../../_vectors";

interface Props {
  profileUrl: string;
  bannerUrl: string;
  name: string;
  volumeTraded: number;
  isVerified: boolean;
}

const TrendingNFTCard: FC<Props> = ({
  bannerUrl,
  name,
  volumeTraded,
  isVerified,
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
      className="h-200 w-72 mobile:w-full hover:scale-105 mobile:hover:scale-100 transition-all flex-none border-2 border-slate-200 dark:border-gray-500 relative p-2 mr-4 mobile:mr-0 rounded-xl snap-center"
    >
      <section className="h-[60%]">
        <img
          src={bannerUrl}
          alt={name}
          className="w-full h-full object-cover rounded-xl shadow-lg border-gray-400"
        />
      </section>
      <div
        className={`
          ${
            isNFTCardOvered
              ? "block transition-all bg-red-500"
              : "hidden transition-all"
          }`}
      >
        <div className="absolute top-[1%]">
          <p className="text-white px-3 py-5 font-medium text-xl">Ethereum</p>
        </div>
        <div className=" absolute top-[1%] mt-6 py-2 px-3 right-2 flex justify-center items-center  font-bold  m-2-0 text-white mx-3 text-lg bg-black rounded-lg opacity-40">
          <HeartVector className="w-5 h-5 font-bold" />
          <span className=" ml-1 text-sm">10</span>
        </div>
      </div>
      <section className="items-center">
        <div className="flex justify-between items-center">
          <div className="flex mr-1 items-center">
            <h2 className="text-sm font-medium mt-2 text-gray-400">{name}</h2>
            {isVerified && (
              <img src={VerifiedImg.src} alt="verified" className="h-6" />
            )}
          </div>
          <DotsVector
            className="font-black text-gray-400
             mr-3 hover:bg-gray-100 w-8 h-8 p-1 rounded-full mt-2"
          />
        </div>
      </section>
      <section className="h-[18%] flex items-center justify-between bg-slate-100 dark:bg-darkLight rounded-xl mt-2 py-2 px-3">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-thine">
            Highest bid
          </p>
          <span className="font-semibold dark:text-white">15 wETH</span>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-thine">
            Price
          </p>
          <span className="font-semibold dark:text-white">
            {volumeTraded} ETH
          </span>
        </div>
      </section>
      <div className="w-full my-3">
        <button className="w-full py-2 px-2 bg-blue-600 hover:bg-blue-700 transition-all text-gray-200 rounded-lg font-semibold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TrendingNFTCard;
