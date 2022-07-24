import useClickOutside from "@components/hooks/useClickOutside";
import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import NFTCardFallback from "@components/modules/__modules__/NFTCardFallback";
import ShowWidget from "@components/modules/__modules__/ShowWidget";
import { VSingleDot } from "@components/modules/__modules__/_vectors";
import { nftsState } from "@lib/atoms";
import { NFTData } from "@lib/models/GeneralModel";
import { List } from "antd";
import React, { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import ListViewBuilder from "@components/modules/__modules__/ListViewBuilder";
import useNfTs from "@components/hooks/useNFTs";

const ExploreNFTs = () => {
  const [isBlockchainModal, setIsBlockchainModal] = useState(false);
  const [isPriceRangeModal, setIsPriceRangeModal] = useState(false);
  const [isSortModal, setIsSortModal] = useState(false);
  const currentNfts = useRecoilValue(nftsState);
  const { nfts, metadata, isLoading } = currentNfts;
  const blockchainModalRef = useClickOutside(() => setIsBlockchainModal(false));
  const priceRangeModalRef = useClickOutside(() => setIsPriceRangeModal(false));
  const sortModalRef = useClickOutside(() => setIsSortModal(false));

  const { onLoadMore, shouldShowLoadMoreButton } = useNfTs();

  const toggleBlockchainModal = () => {
    setIsBlockchainModal(!isBlockchainModal);
    setIsPriceRangeModal(false);
  };

  const togglePriceRangeModal = () => {
    setIsPriceRangeModal(!isPriceRangeModal);
    setIsBlockchainModal(false);
  };

  const toggleSortModal = () => {
    setIsSortModal(!isSortModal);
  };

  return (
    <div>
      <section className="2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit mt-12">
        <h2 className="font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl dark:text-white px-6 pb-3">
          Explore NFTs
        </h2>
        <ShowWidget condition={!isLoading}>
          <div className="flex justify-between mobile:justify-center items-center mx-5 dark:text-white font-bold relative mobile:w-[95%]">
            <div className="flex gap-5 relative">
              <button
                onClick={toggleBlockchainModal}
                className="border border-gray-300 dark:border-gray-500 py-2 px-3 mb-5 rounded-lg"
              >
                Blockchain
              </button>
              <button
                onClick={togglePriceRangeModal}
                className="border border-gray-300 dark:border-gray-500 py-2 px-3 mb-5 rounded-lg"
              >
                Price Range
              </button>
              <ShowWidget condition={isBlockchainModal}>
                <div
                  ref={blockchainModalRef}
                  className="absolute top-14 bg-white dark:bg-darkPrimary border border-gray-200 dark:border-darkLight z-20 w-full rounded-lg shadow-lg transition-all"
                >
                  <p className="py-5 px-2 flex justify-between items-center">
                    Polygon <VSingleDot className="text-green-600" />
                  </p>
                </div>
              </ShowWidget>
              <ShowWidget condition={isPriceRangeModal}>
                <div
                  ref={priceRangeModalRef}
                  className="absolute top-14 left-28 bg-white dark:bg-darkPrimary border border-gray-200 dark:border-darkLight z-20 w-full rounded-lg shadow-lg transition-all"
                >
                  <p className="py-5 px-2 flex justify-between items-center">
                    MATIC
                  </p>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      placeholder="from"
                      className="w-full py-2 bg-gray-200 dark:bg-gray-500 m-1 rounded-lg px-2 outline-none transition-all focus:shadow-md  focus:bg-white dark:focus:bg-darkLight"
                    />
                    <input
                      type="number"
                      placeholder="to"
                      className="w-full py-2 bg-gray-200 dark:bg-gray-500 m-1 rounded-lg px-2 outline-none transition-all focus:shadow-md  focus:bg-white dark:focus:bg-darkLight"
                    />
                  </div>
                  <div className="flex gap-1">
                    <button className="w-full py-2 bg-gray-200 dark:bg-gray-500 m-1 rounded-lg">
                      Clear
                    </button>
                    <button className="w-full py-2 bg-blue-600 text-white m-1 rounded-lg">
                      Apply
                    </button>
                  </div>
                </div>
              </ShowWidget>
            </div>
            <button
              onClick={toggleSortModal}
              className="border border-gray-300 dark:border-gray-500 py-2 px-3 mb-5 rounded-lg"
            >
              Filter & Sort
            </button>
            <ShowWidget condition={isSortModal}>
              <div
                ref={sortModalRef}
                className="absolute top-14 bg-white border border-gray-200 dark:border-darkLight dark:bg-darkPrimary z-20 w-60 right-0 rounded-lg shadow-lg transition-all p-4"
              >
                <p className="py-5 px-2 flex justify-between items-center cursor-pointer hover:bg-gray-200 hover:dark:bg-darkLight rounded-lg transition-all">
                  DESC <VSingleDot className="text-green-600" />
                </p>
                <p className="py-5 px-2 flex justify-between items-center cursor-pointer hover:bg-gray-200 hover:dark:bg-darkLight rounded-lg transition-all">
                  ASC
                </p>
                <div className="flex gap-3 mt-3">
                  <button className="w-full py-2 bg-gray-200 dark:bg-gray-500 m-1 rounded-lg">
                    Clear
                  </button>
                  <button className="w-full py-2 bg-blue-600 text-white m-1 rounded-lg">
                    Apply
                  </button>
                </div>
              </div>
            </ShowWidget>
          </div>
        </ShowWidget>

        <div className="grid grid-cols-auto-fit gap-3 mx-5 justify-center h-fit">
          {/*<ShowWidget condition={!isLoading} fallback={<NFTCardFallback />}>*/}
          {/*  {nfts.map((nft: NFTData, index: React.Key | null | undefined) => {*/}
          {/*    return <NFTCard key={index} nft={nft} likes={0} />;*/}
          {/*  })}*/}
          {/*</ShowWidget>*/}
          <ListViewBuilder
            items={nfts}
            renderItem={(item) => (
              <List.Item>
                <NFTCard nft={item} />
              </List.Item>
            )}
            hasMore={false}
            showLoadMoreButton={shouldShowLoadMoreButton}
            loading={currentNfts.isLoading}
            loadingMore={false}
            onLoadMore={onLoadMore}
          />
        </div>
      </section>
    </div>
  );
};

export default ExploreNFTs;
