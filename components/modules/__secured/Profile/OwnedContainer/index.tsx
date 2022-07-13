import React from "react";
import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import { dummy_data } from "@components/modules/__noAuth/Presentation/dummy_data";
import { useRecoilValue } from "recoil";
import { nftsState } from "@lib/atoms";
import { NFTData } from "@lib/models/GeneralModel";

const OwnedContainer = () => {
  // const { staticImages } = dummy_data;
  const currentNfts = useRecoilValue(nftsState);
  const { nfts, metadata, isLoading } = currentNfts;
  return (
    <div className="flex flex-wrap justify-start my-5 gap-3">
      {!isLoading &&
        nfts.map((nft: NFTData, index: React.Key | null | undefined) => {
          return (
            <div key={index}>
              <NFTCard
                key={index}
                // nftUrl={staticImages[1].url}
                nft={nft}
                // nftName="Monkey King"
                // nftPrice="3.03"
                // ownerName="Jozzy #2020"
                isBuyAvailable={false}
                // volumeTraded={0}
                // isVerified={false}
              />
            </div>
          );
        })}
    </div>
  );
};

export default OwnedContainer;
