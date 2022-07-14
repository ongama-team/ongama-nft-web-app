import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import NFTCardFallback from "@components/modules/__modules__/NFTCardFallback";
import ShowWidget from "@components/modules/__modules__/ShowWidget";
import { VSingleDot } from "@components/modules/__modules__/_vectors";
import { nftsState } from "@lib/atoms";
import { NFTData } from "@lib/models/GeneralModel";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

const ExploreNFTs = () => {
  const [isBlockchainModal, setIsBlockchainModal] = useState(false);
  const [isPriceRangeModal, setIsPriceRangeModal] = useState(false);
  const [isSortModal, setIsSortModal] = useState(false);
  const currentNfts = useRecoilValue(nftsState);
  const { nfts, metadata, isLoading } = currentNfts;

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
          <div className="flex justify-between items-center mx-5 dark:text-white font-bold relative mobile:w-[95%] overflow-x-auto">
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
                <div className="absolute top-14 bg-white dark:bg-darkPrimary z-20 w-full rounded-lg shadow-lg transition-all">
                  <p className="py-5 px-2 flex justify-between items-center">
                    Polygon <VSingleDot className="text-green-600" />
                  </p>
                  <div className="flex gap-3">
                    <button className="w-full py-2 bg-gray-200 dark:bg-gray-500 m-1 rounded-lg cursor-not-allowed">
                      Clear
                    </button>
                    <button className="w-full py-2 bg-blue-600 text-white m-1 rounded-lg cursor-not-allowed">
                      Apply
                    </button>
                  </div>
                </div>
              </ShowWidget>
              <ShowWidget condition={isPriceRangeModal}>
                <div className="absolute top-14 left-28 bg-white dark:bg-darkPrimary z-20 w-full rounded-lg shadow-lg transition-all">
                  <p className="py-5 px-2 flex justify-between items-center">
                    MATIC
                  </p>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      placeholder="from"
                      className="w-full py-2 bg-gray-200 dark:bg-gray-500 m-1 rounded-lg cursor-not-allowed px-2 outline-none transition-all focus:shadow-md  focus:bg-white dark:focus:bg-darkLight"
                    />
                    <input
                      type="number"
                      placeholder="to"
                      className="w-full py-2 bg-gray-200 dark:bg-gray-500 m-1 rounded-lg cursor-not-allowed px-2 outline-none transition-all focus:shadow-md  focus:bg-white dark:focus:bg-darkLight"
                    />
                  </div>
                  <div className="flex gap-1">
                    <button className="w-full py-2 bg-gray-200 dark:bg-gray-500 m-1 rounded-lg cursor-not-allowed">
                      Clear
                    </button>
                    <button className="w-full py-2 bg-blue-600 text-white m-1 rounded-lg cursor-not-allowed">
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
              <div className="absolute top-14 bg-white dark:bg-darkPrimary z-20 w-60 right-0 rounded-lg shadow-lg transition-all p-4">
                <p className="py-5 px-2 flex justify-between items-center cursor-pointer hover:bg-gray-200 hover:dark:bg-darkLight rounded-lg transition-all">
                  DESC <VSingleDot className="text-green-600" />
                </p>
                <p className="py-5 px-2 flex justify-between items-center cursor-pointer hover:bg-gray-200 hover:dark:bg-darkLight rounded-lg transition-all">
                  ASC
                </p>
                <div className="flex gap-3 mt-3">
                  <button className="w-full py-2 bg-gray-200 dark:bg-gray-500 m-1 rounded-lg cursor-not-allowed">
                    Clear
                  </button>
                  <button className="w-full py-2 bg-blue-600 text-white m-1 rounded-lg cursor-not-allowed">
                    Apply
                  </button>
                </div>
              </div>
            </ShowWidget>
          </div>
        </ShowWidget>

        <div className="flex flex-wrap mx-5 items-center mobile:justify-center gap-3 h-fit">
          <ShowWidget condition={!isLoading} fallback={<NFTCardFallback />}>
            {nfts.map((nft: NFTData, index: React.Key | null | undefined) => {
              return <NFTCard key={index} nft={nft} likes={0} />;
            })}
          </ShowWidget>
        </div>
      </section>
    </div>
  );
};

export default ExploreNFTs;
