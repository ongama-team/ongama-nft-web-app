import React from "react";
import Carousel from "@components/modules/__modules__/Carousel/Carousel";
import { dummy_data } from "./dummy_data";
import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import { useRecoilValue } from "recoil";
import { nftsState } from "@lib/atoms";
import { NFTData } from "@lib/models/GeneralModel";
import NFTCardFallback from "@components/modules/__modules__/NFTCardFallback";
import ShowWidget from "@components/modules/__modules__/ShowWidget";

const LiveAuctions = () => {
  const currentNfts = useRecoilValue(nftsState);
  const { nfts, metadata, isLoading } = currentNfts;
  return (
    <section className=" 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit mt-12">
      <h2 className="font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl dark:text-white px-6 pb-3">
        Live auction 🔥
      </h2>

      <div className="flex items-center mx-auto h-fit">
        <Carousel canBeDisabled={true}>
          <div className="flex font-ibmPlexSans gap-3">
            <ShowWidget condition={!isLoading} fallback={<NFTCardFallback />}>
              {nfts.map((nft: NFTData, index: React.Key | null | undefined) => {
                return (
                  <NFTCard key={index} nft={nft} likes={0} isAuction={true} />
                );
              })}
            </ShowWidget>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default LiveAuctions;
