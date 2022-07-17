import React from "react";
import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import { NFTData, NFTMetaData } from "@lib/models/GeneralModel";
import NFTCardFallback from "@components/modules/__modules__/NFTCardFallback";
import ShowWidget from "@components/modules/__modules__/ShowWidget";
import NotFound from "../module/NotFound";

interface IProps {
  nfts: NFTData[];
  isLoading: boolean;
  metadata: NFTMetaData;
}

const OwnedContainer = ({ nfts, isLoading, metadata }: IProps) => {
  return (
    <div className="flex flex-wrap justify-start mobile:justify-center my-5 gap-3">
      <ShowWidget condition={!isLoading} fallback={<NFTCardFallback />}>
        {nfts.map((nft: NFTData, index: React.Key | null | undefined) => {
          return (
            <div key={index}>
              <NFTCard key={index} nft={nft} isBuyAvailable={false} />
            </div>
          );
        })}
      </ShowWidget>
      <ShowWidget condition={nfts.length === 0}>
        <NotFound content="Owned NFTs" />
      </ShowWidget>
    </div>
  );
};

export default OwnedContainer;
