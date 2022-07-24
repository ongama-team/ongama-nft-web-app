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

const Items = () => {
  const currentNfts = useRecoilValue(nftsState);
  const { nfts, metadata, isLoading } = currentNfts;

  const { onLoadMore, shouldShowLoadMoreButton } = useNfTs();

  return (
    <div>
      <div className="flex flex-wrap justify-center my-5 gap-3">
        <ListViewBuilder
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
        />
      </div>
      <div className="w-full bg-gradient-to-r p-[3px] from-[#7928ca] to-pink-600 rounded-3xl">
        <button className="w-full py-2 bg-white rounded-3xl dark:bg-darkPrimary">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7928ca] to-pink-600 font-semibold">
            Load More
          </span>
        </button>
      </div>
    </div>
  );
};

export default Items;
