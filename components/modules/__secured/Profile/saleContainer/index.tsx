import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import React from "react";
import { NFTData, NFTMetaData } from "@lib/models/GeneralModel";
import NFTCardFallback from "@components/modules/__modules__/NFTCardFallback";
import ShowWidget from "@components/modules/__modules__/ShowWidget";
import NotFound from "../module/NotFound";
import ListViewBuilder from "@components/modules/__modules__/ListViewBuilder";
import { List } from "antd";
import useNfTs from "@components/hooks/useNFTs";
import { UserAccount } from "@lib/models/UserAccount";

interface IProps {
  nfts: NFTData[];
  isLoading: boolean;
  metadata: NFTMetaData;
  searchedUserProfile: UserAccount;
  isCurrentconnectedUser: boolean;
}

export const SaleContainer = ({
  nfts,
  isLoading,
  metadata,
  searchedUserProfile,
  isCurrentconnectedUser,
}: IProps) => {
  const listedNfts = nfts.filter(
    (nft) =>
      nft.listed && nft.ownerAddress === searchedUserProfile.walletAddress
  );

  const { onLoadMore, shouldShowLoadMoreButton } = useNfTs();

  return (
    <div className="flex flex-wrap justify-center mobile:justify-center my-5 gap-3">
      <ListViewBuilder
        items={listedNfts}
        renderItem={(item) => (
          <List.Item>
            <NFTCard
              nft={item}
              isBuyAvailable={isCurrentconnectedUser ? false : true}
              isEditable={isCurrentconnectedUser ? true : false}
            />
          </List.Item>
        )}
        hasMore={false}
        showLoadMoreButton={shouldShowLoadMoreButton}
        loading={isLoading}
        loadingMore={false}
        onLoadMore={onLoadMore}
      />

      <ShowWidget condition={listedNfts.length === 0 && !isLoading}>
        <NotFound content="on sales NFTs" />
      </ShowWidget>
    </div>
  );
};
