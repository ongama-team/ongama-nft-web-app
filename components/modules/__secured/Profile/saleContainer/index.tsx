import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import React from "react";
import { NFTData, NFTMetaData } from "@lib/models/GeneralModel";
import NFTCardFallback from "@components/modules/__modules__/NFTCardFallback";
import ShowWidget from "@components/modules/__modules__/ShowWidget";
import NotFound from "../module/NotFound";

interface IProps {
  nfts: NFTData[];
  isLoading: boolean;
  metadata: NFTMetaData;
}

export const SaleContainer = ({ nfts, isLoading, metadata }: IProps) => {
  const listedNfts = nfts.filter((nft) => nft.listed);
  return (
    <div className="flex flex-wrap justify-start mobile:justify-center my-5 gap-3">
      <ShowWidget condition={!isLoading} fallback={<NFTCardFallback />}>
        {listedNfts.map((nft: NFTData, index: React.Key | null | undefined) => {
          return (
            <NFTCard
              key={index}
              nft={nft}
              isBuyAvailable={false}
              isEditable={true}
            />
          );
        })}
      </ShowWidget>

      <ShowWidget condition={listedNfts.length === 0}>
        <NotFound content="on sales NFTs" />
      </ShowWidget>
    </div>
  );
};
