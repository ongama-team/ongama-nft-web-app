/* eslint-disable @next/next/no-img-element */
import { DotsVector, Ethereum, HeartVector } from "../../_vectors";
import { FC } from "react";

interface IProps {
  nftUrl: string;
  nftPrice: string;
  nftName: string;
  ownerProfile: string;
  ownerName: string;
  likes: number;
  auction: string;
}

const Card: FC<IProps> = ({
  nftUrl,
  nftName,
  nftPrice,
  likes,
  auction,
  ownerName,
  ownerProfile,
}) => {
  return (
    <div className="flex w-full shadow-lg mx-auto p-5 rounded-xl flex-col bg-white">
      <div className="flex mx-1 items-center justify-between">
        <div className="rounded-full overflow-hidden w-7 h-7">
          <img
            src={ownerProfile}
            alt={ownerName}
            className="w-full object-cover"
          />
        </div>
        <DotsVector className="w-4 h-4 opacity-70" />
      </div>

      <div className="rounded-3xl mt-4 overflow-hidden">
        <img
          width={500}
          height={500}
          src={nftUrl}
          alt={nftName}
          className="object-cover"
        />
      </div>

      <div className="mt-3 flex justify-between">
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
          <button className="text-blue-500 font-bold text-sm pt-1">
            Buy now
          </button>
        </div>
        <div className="flex opacity-80">
          <HeartVector className="h-6 w-6" />
          <p className="text-xl ml-2 font-bold">{likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
