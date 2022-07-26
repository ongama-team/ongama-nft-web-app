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
  walletAddress: string;
}

const CreatedContainer = ({
  nfts,
  isLoading,
  metadata,
  walletAddress,
}: IProps) => {
  const createdNFts = nfts.filter(
    (nft) => nft.creatorAddress === walletAddress
  );

  return (
    <div className="flex flex-wrap justify-start mobile:justify-center my-5 gap-3">
      <ShowWidget condition={!isLoading} fallback={<NFTCardFallback />}>
        {createdNFts.map(
          (nft: NFTData, index: React.Key | null | undefined) => {
            return (
              <div key={index}>
                <NFTCard
                  key={index}
                  nft={nft}
                  isBuyAvailable={false}
                  isEditable={true}
                />
              </div>
            );
          }
        )}
      </ShowWidget>
      <ShowWidget condition={createdNFts.length === 0}>
        <NotFound content="Created NFTs" />
      </ShowWidget>
    </div>
  );
};

export default CreatedContainer;
