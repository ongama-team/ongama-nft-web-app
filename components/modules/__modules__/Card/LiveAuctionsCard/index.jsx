/* eslint-disable @next/next/no-img-element */

import React from "react";
import { dummy_data } from "../../../__noAuth/LiveAuctions/dummy_data";
import NFTCard from "../NftCard";

const LiveAuctionsCard = () => {
  const { liveAuctionsData } = dummy_data;
  return (
    <div className="md:grid md:grid-rows-1 gap-x-3 gap-y-4 md:grid-flow-col grid-flow-col-dense grid grid-rows-1 ">
      {liveAuctionsData &&
        liveAuctionsData.map((item, index) => {
          const { url, title, subTitle, likes, price } = item;
          return (
            <div
              className="w-80  md:w-60  border-2 bg-white rounded-xl relative"
              key={index}
            >
              <NFTCard
                key={index}
                nftUrl={url}
                nftPrice={price}
                nftName={title}
                ownerProfile={url}
                ownerName={subTitle}
                likes={likes}
                auction={""}
              />
            </div>
          );
        })}
    </div>
  );
};

export default LiveAuctionsCard;
