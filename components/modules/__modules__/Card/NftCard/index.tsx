/* eslint-disable @next/next/no-img-element */
import { DotsVector, Ethereum, HeartVector } from "../../_vectors";
import { FC } from "react";
import TimeLeft from "helpers/TimeLeft";

interface IProps {
  nftUrl: string;
  nftPrice: string;
  nftName: string;
  ownerAvatarUrl?: string;
  ownerName?: string;
  likes?: number;
  auction?: string;
  isBuyAvailable?: boolean;
}

const NFTCard: FC<IProps> = ({
  nftUrl,
  nftName,
  nftPrice,
  likes,
  auction,
  ownerName,
  ownerAvatarUrl,
  isBuyAvailable = true,
}) => {
  return (
    <div className="flex w-full shadow-lg mx-auto p-5 rounded-xl flex-col bg-white dark:bg-darkLight dark:text-white">
      <div
        className={`flex mx-1 items-center justify-between ${
          !ownerAvatarUrl && "hidden"
        }`}
      >
        <div className="rounded-full w-7 h-7">
          <img
            src={ownerAvatarUrl}
            alt={ownerName}
            className="object-cover w-7 h-7 rounded-full"
          />
        </div>
        <DotsVector className="w-4 h-4 opacity-70" />
      </div>

      <div className="rounded-xl mt-4 overflow-hidden">
        <img
          width={500}
          height={500}
          src={nftUrl}
          alt={nftName}
          className="object-cover"
        />
      </div>
      <button className="py-1 px-3  rounded-xl  bg-white border-2 border-purple-500 absolute mt-48 text-gray-700 font-bold">
        <TimeLeft />
        <span className="text-gray-400 mx-2 font-sans">left</span> 🔥
      </button>

      <div className="mt-3 flex justify-between pt-2">
        <p className="text-sm font-bold">{nftName}</p>
        <Ethereum className="h-6 w-6" />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-sm font-bold">
            {nftPrice} ETH
            <span className="text-gray-500 text-sm font-bold mx-1">
              {auction}
            </span>
          </p>
          <button
            className={`text-blue-500 font-bold text-sm pt-1 ${
              !isBuyAvailable && "hidden"
            }`}
          >
            Buy now
          </button>
        </div>
        <div className={`${likes && "flex"} opacity-80`}>
          <HeartVector className="h-6 w-6" />
          <p className="text-xl ml-2 font-bold">{likes}</p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
