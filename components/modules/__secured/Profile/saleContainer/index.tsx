import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import React from "react";
import { dummy_data } from "@components/modules/__noAuth/Presentation/dummy_data";
import { useRecoilValue } from "recoil";
import { nftsState } from "@lib/atoms";
import { NFTData } from "@lib/models/GeneralModel";
import NFTCardFallback from "@components/modules/__modules__/NFTCardFallback";
import ShowWidget from "@components/modules/__modules__/ShowWidget";

export const SaleContainer = () => {
  const currentNfts = useRecoilValue(nftsState);
  const { nfts, metadata, isLoading } = currentNfts;
  return (
    <div className="flex flex-wrap justify-start mobile:justify-center my-5 gap-3">
      <ShowWidget condition={!isLoading} fallback={<NFTCardFallback />}>
        {nfts.map((nft: NFTData, index: React.Key | null | undefined) => {
          return <NFTCard key={index} nft={nft} isBuyAvailable={false} />;
        })}
      </ShowWidget>
    </div>
  );
};
