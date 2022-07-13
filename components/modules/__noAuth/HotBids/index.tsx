import React, { useRef } from "react";
import Carousel from "@components/modules/__modules__/Carousel/Carousel";
import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import { dummy_data } from "./dummy_data";
import { useRecoilValue } from "recoil";
import { nftsState } from "@lib/atoms";
import { NFTData } from "@lib/models/GeneralModel";

const HotBids = () => {
  const currentNfts = useRecoilValue(nftsState);
  const { nfts, metadata, isLoading } = currentNfts;
  return (
    <div className="2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit mt-12">
      <h2 className="font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl dark:text-white px-6 pb-3">
        Hot Bids 🔥
      </h2>
      <div className="flex items-center mx-auto h-fit">
        <Carousel canBeDisabled={true}>
          <div className="flex font-ibmPlexSans gap-3">
            {!isLoading &&
              nfts.map((nft: NFTData, index: React.Key | null | undefined) => {
                return (
                  <NFTCard
                    key={index}
                    nft={nft}
                    likes={0}
                    isBuyAvailable={false}
                    isHotBids={true}
                  />
                );
              })}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HotBids;
