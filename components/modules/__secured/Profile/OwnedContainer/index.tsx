import React from "react";
import NFTCard from "@components/modules/__modules__/Card/NFTCard";
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

const OwnedContainer = ({
  nfts,
  isLoading,
  searchedUserProfile,
  isCurrentconnectedUser,
}: IProps) => {
  const { onLoadMore, shouldShowLoadMoreButton } = useNfTs();

  const ownedNfts = nfts.filter(
    (nft) => nft.ownerAddress === searchedUserProfile.walletAddress
  );

  return (
    <div className="my-5">
      <ListViewBuilder
        items={ownedNfts}
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
      <ShowWidget condition={nfts.length === 0 && !isLoading}>
        <NotFound content="Owned NFTs" />
      </ShowWidget>
    </div>
  );
};

export default OwnedContainer;
