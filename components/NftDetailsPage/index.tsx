/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import NftPreview from "@components/CreateNftPage/NftPreview";
import useClickOutside from "@components/hooks/useClickOutside";
import useNfTs from "@components/hooks/useNFTs";
import NFTCard from "@components/modules/__modules__/Card/NFTCard";
import ListViewBuilder from "@components/modules/__modules__/ListViewBuilder";
import ShareContainer from "@components/modules/__modules__/ShareContainer";
import ShowWidget from "@components/modules/__modules__/ShowWidget";
import {
  DotsVector,
  HeartVector,
  VShare,
} from "@components/modules/__modules__/_vectors";
import Header from "@components/modules/__noAuth/Header";
import { Tab } from "@headlessui/react";
import { sharePageLinkAtom } from "@lib/atoms";
import { NFTData, NFTMetaData } from "@lib/models/GeneralModel";
import { backendApiService } from "@lib/services/BackendApiService";
import { List } from "antd";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import NftBid from "./modules/NftBid";
import NftOverView from "./modules/NftOverview";
import NftsDetailTabs from "./NftDetailTabs";

interface IProps {
  nft: NFTData;
}

const NftDetailsPage: FC<IProps> = ({ nft }) => {
  const [ownerNfts, setOwnerNfts] = useState<{
    nfts: NFTData[];
    metadata: NFTMetaData | null;
    isLoading: boolean;
  }>({
    nfts: [],
    isLoading: true,
    metadata: null,
  });
  const [isNftOptions, setIsNftOptions] = useState(false);
  const [isShareContainer, setIsShareContaner] =
    useRecoilState(sharePageLinkAtom);

  const { onLoadMore, shouldShowLoadMoreButton } = useNfTs();

  const reportRef = useClickOutside(() => setIsNftOptions(false));

  useEffect(() => {
    if (nft)
      (async () => {
        setOwnerNfts({
          ...ownerNfts,
          isLoading: true,
        });
        const response = await backendApiService.findNFts({
          walletAddress: nft.owner.walletAddress,
        });

        setOwnerNfts({
          nfts: response.nfts,
          metadata: response.meta,
          isLoading: false,
        });
      })();
  }, []);

  const toggleNftOptions = () => {
    setIsNftOptions(!isNftOptions);
  };

  const toggleShareContainer = () => {
    setIsShareContaner(!isShareContainer);
  };

  return (
    <>
      <Header />
      <div className="2xl:w-[80%] xl:w-[85%] lg:w-[90%] min-lg:w-[92%]  mx-auto h-fit">
        <div className="flex min-lg:flex-col pt-24 gap-10 relative">
          <section>
            <div>
              <img
                src={nft.url || nft.urlCompressed || nft.urlThumbnail || ""}
                alt={nft.name}
                className="2xl:w-[700px] 2xl:h-[700px] xl:w-[600px] xl:h-[600px] lg:w-[500px] lg:h-[500px] min-lg:w-full min-lg:h-auto object-cover rounded-lg mx-20 min-lg:mx-0 transition-all"
              />
            </div>
            <Tab.Group>
              <NftsDetailTabs />
              <Tab.Panels>
                <NftOverView nft={nft} />
                <NftBid />
              </Tab.Panels>
            </Tab.Group>
          </section>
          <section className="w-96 min-lg:w-full">
            <h1 className="text-3xl font-bold dark:text-white">{nft.name}</h1>
            <Link href={`/profile/${nft.owner.walletAddress}`}>
              <div className="py-5 flex gap-3 border-b dark:border-b-gray-600 cursor-pointer">
                <img
                  src={
                    nft.owner.avatarUrl ||
                    nft.owner.avatarUrlCompressed ||
                    nft.owner.avatarUrlThumbnail ||
                    ""
                  }
                  alt={nft.owner.username}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-gray-500 font-bold dark:text-gray-300">
                    Current owner
                  </p>
                  <p className="font-bold dark:text-white">
                    {nft.owner.username}
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex justify-between py-5 items-center text-gray-500 dark:text-gray-300 relative">
              <div className="flex gap-10 items-center ">
                <p className="flex items-center gap-2 hover:text-black hover:dark:text-white cursor-pointer transition-all">
                  <span>
                    <HeartVector className="h-6 w-6" />
                  </span>
                  <span className="font-bold">0</span>
                </p>
                <p
                  role="button"
                  onClick={toggleShareContainer}
                  className="flex items-center gap-2 cursor-pointer hover:text-black hover:dark:text-white transition-all"
                >
                  <span className="font-bold text-2xl">
                    <VShare />
                  </span>
                  <span className="font-bold">Share</span>
                </p>
              </div>
              <p
                role="button"
                onClick={toggleNftOptions}
                className="cursor-pointer hover:text-black hover:bg-gray-100 p-2 dark:hover:bg-darkLight rounded-xl hover:dark:text-white transition-all"
              >
                <DotsVector className="h-6 w-6" />
              </p>

              <div className="absolute">
                <ShareContainer />
              </div>

              <div
                ref={reportRef}
                className={`${
                  !isNftOptions
                    ? "scale-0 transition-all"
                    : "scale-100 transition-all"
                } absolute right-0 mt-20 bg-white py-5 px-3 border shadow-lg rounded-lg font-bold dark:bg-darkLight dark:border-gray-600 cursor-pointer transition-all dark:hover:text-white hover:text-black`}
              >
                <p>Report this NFT</p>
              </div>
            </div>

            <div className="border pt-5 px-5 mt-5 rounded-lg dark:border-gray-600">
              <div className="bg-gray-100 dark:bg-darkLight py-5 px-3 rounded-lg flex flex-col gap-1">
                <p className="text-gray-700 font-bold dark:text-gray-200">
                  Price
                </p>
                <p className="font-bold dark:text-white">{nft.price} MATIC</p>
              </div>

              <button className="bg-blue-600 w-full py-2 my-5 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">
                Buy now for {nft.price} MATIC
              </button>
            </div>
          </section>
        </div>
        <div>
          <h1 className="text-2xl py-10 text-center font-bold">
            More from The Owner
          </h1>
        </div>
        <div
          className={`${
            ownerNfts.isLoading
              ? "2xl:h-[40rem] xl:h-[40rem] lg:h-[60rem] md:h-[60rem] mobile:h-[120rem]"
              : ""
          }`}
        >
          <ListViewBuilder
            items={ownerNfts.nfts}
            renderItem={(item) => (
              <List.Item>
                <NFTCard nft={item} />
              </List.Item>
            )}
            hasMore={false}
            showLoadMoreButton={shouldShowLoadMoreButton}
            loading={ownerNfts.isLoading}
            loadingMore={false}
            onLoadMore={onLoadMore}
          />
        </div>
      </div>
    </>
  );
};

export default NftDetailsPage;
