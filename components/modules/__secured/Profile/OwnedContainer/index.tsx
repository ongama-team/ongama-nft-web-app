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
}

const OwnedContainer = ({ nfts, isLoading, searchedUserProfile }: IProps) => {
  const { onLoadMore, shouldShowLoadMoreButton } = useNfTs();

  const ownedNfts = nfts.filter(
    (nft) => nft.ownerAddress === searchedUserProfile.walletAddress
  );

  return (
    <div className="flex justify-center mobile:justify-center my-5 gap-3">
      <ListViewBuilder
        items={ownedNfts}
        renderItem={(item) => (
          <List.Item>
            <NFTCard nft={item} />
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
