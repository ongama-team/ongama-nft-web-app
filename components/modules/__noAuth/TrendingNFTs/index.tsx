import React, { useRef } from "react";
import Carousel from "@components/modules/__modules__/Carousel/Carousel";
import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import { useRecoilValue } from "recoil";
import { nftsState } from "@lib/atoms";
import ShowWidget from "@components/modules/__modules__/ShowWidget";
import NFTCardFallback from "@components/modules/__modules__/NFTCardFallback";

const TrendingNFTs = () => {
  const currentNfts = useRecoilValue(nftsState);
  const { nfts, metadata, isLoading } = currentNfts;
  return (
    <div className=" 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit mt-12">
      <h2 className="font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl dark:text-white px-6 pb-3">
        Trending NFTs
      </h2>
      <div className="flex items-center mx-auto h-fit">
        <Carousel canBeDisabled={true}>
          <div className="flex font-ibmPlexSans gap-3">
            <ShowWidget condition={!isLoading} fallback={<NFTCardFallback />}>
              {nfts.map((nft, index) => {
                return <NFTCard key={index} nft={nft} isAuction={false} />;
              })}
            </ShowWidget>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingNFTs;
