import React from "react";
import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import { dummy_data } from "../../modules/__noAuth/Presentation/dummy_data";
import { useRecoilValue } from "recoil";
import { nftsState } from "@lib/atoms";
import { NFTData } from "@lib/models/GeneralModel";
import NFTCardFallback from "@components/modules/__modules__/NFTCardFallback";
import ShowWidget from "@components/modules/__modules__/ShowWidget";
import ListViewBuilder from "@components/modules/__modules__/ListViewBuilder";
import { List } from "antd";
import useNfTs from "@components/hooks/useNFTs";
import NotFound from "@components/modules/__secured/Profile/module/NotFound";

const Items = () => {
  const currentNfts = useRecoilValue(nftsState);
  const { nfts, metadata, isLoading } = currentNfts;

  const { onLoadMore, shouldShowLoadMoreButton } = useNfTs();

  return (
    <div>
      <div className="flex flex-wrap justify-center my-5 gap-3">
        <NotFound content={"Drop NFTs"} />
        {/* <ListViewBuilder
          items={nfts}
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
        /> */}
      </div>
    </div>
  );
};

export default Items;
