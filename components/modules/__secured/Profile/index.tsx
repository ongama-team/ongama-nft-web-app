/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import {
  Block,
  Collections,
  DotsVector,
  VShare,
} from "@components/modules/__modules__/_vectors";
import { Tab } from "@headlessui/react";
import ShareContainer from "./module/shareContainer";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentAccountState,
  shareProfileLinkAtom,
  subscribesAtom,
  walletAddressAtom,
} from "@lib/atoms";
import Header from "@components/modules/__noAuth/Header";
import { SaleContainer } from "@components/modules/__secured/Profile/saleContainer";
import ProfileMenu from "../ProfileMenu";
import AvatarAndCoverCard from "@components/modules/__modules__/Card/AvatartAndCoverCard";
import TabList from "./module/TabList";
import OwnedContainer from "./OwnedContainer";
import CreatedContainer from "./CreatedContainer";
import ActivityContainer from "./ActivityContainer";
import { useRouter } from "next/router";
import SubScribesContainer from "./module/Subscribes";
import CopingAddressCard from "@components/modules/__modules__/Card/CopingAddressCard";
import { UserAccount } from "@lib/models/UserAccount";
import { NFTData, NFTMetaData } from "@lib/models/GeneralModel";
import { backendApiService } from "@lib/services/BackendApiService";
import ProfileReportOption from "./module/ProfileReportOptions";

interface IProps {
  searchedUserProfile: UserAccount;
}

function ProfileContainer({ searchedUserProfile }: IProps) {
  const router = useRouter();
  const connectedWallet = useRecoilValue(walletAddressAtom);
  const isSubscribesOpen = useRecoilValue(subscribesAtom);
  const [isSubscribesDisplayed, setIsSubscribesDisplayed] =
    useRecoilState(subscribesAtom);
  const [isShareOpen, setIsShareOpen] = useRecoilState(shareProfileLinkAtom);
  const currentConnectedUser = useRecoilValue(currentAccountState);
  const [isCurrentConnectedUserProfile, setIsCurrentConnectUserProfile] =
    useState(true);

  const [searchedUserProfileNfts, setSearchedUserProfileNFts] = useState<{
    nfts: NFTData[];
    metadata: NFTMetaData | null;
    isLoading: boolean;
  }>({
    nfts: [],
    isLoading: true,
    metadata: null,
  });

  const [isPageReportModal, setIsPageReportModal] = useState(false);

  useEffect(() => {
    if (currentConnectedUser && searchedUserProfile) {
      currentConnectedUser?.walletAddress === searchedUserProfile.walletAddress
        ? setIsCurrentConnectUserProfile(true)
        : setIsCurrentConnectUserProfile(false);
    }
  }, [
    currentConnectedUser,
    currentConnectedUser?.walletAddress,
    searchedUserProfile,
  ]);

  useEffect(() => {
    if (searchedUserProfile)
      (async () => {
        setSearchedUserProfileNFts({
          ...searchedUserProfileNfts,
          isLoading: true,
        });
        const response = await backendApiService.findNFts({
          walletAddress: searchedUserProfile.walletAddress,
        });
        console.log("nfts", response);
        setSearchedUserProfileNFts({
          nfts: response.nfts,
          metadata: response.meta,
          isLoading: false,
        });
      })();
  }, [searchedUserProfile, searchedUserProfile.walletAddress]);

  const onEditProfile = () => {
    router.push("/profile/edit");
  };

  return (
    <div className="dark:bg-darkPrimary dark:text-white pt-24">
      <Header />
      <ProfileMenu />
      <div className="lg:mx-[12rem] mx-[1rem] rounded-lg">
        <div>
          <AvatarAndCoverCard
            isEditable={isCurrentConnectedUserProfile ? true : false}
          />
        </div>
        <div className="mx-auto max-w-xs mt-4">
          <p className="text-center text-3xl font-bold">
            {isCurrentConnectedUserProfile
              ? currentConnectedUser?.username
              : searchedUserProfile.username}
          </p>
          <div className="flex justify-center mt-4 items-center space-x-6">
            <CopingAddressCard
              walletAddress={
                isCurrentConnectedUserProfile
                  ? currentConnectedUser?.walletAddress ||
                    connectedWallet.address
                  : searchedUserProfile.walletAddress
              }
            />
          </div>
          <p className="text-center mt-4 font-bold">
            {isCurrentConnectedUserProfile
              ? currentConnectedUser?.userBio
              : searchedUserProfile.userBio}
          </p>
          <div className="flex relative space-x-4 mt-4 justify-center">
            <p
              className="hover:cursor-pointer text-gray-600 hover:text-gray-900 font-semibold transition-all"
              onClick={() => setIsSubscribesDisplayed(!isSubscribesDisplayed)}
            >
              <label className="font-bold">20</label> Followers
            </p>
            <p
              className="hover:cursor-pointer text-gray-600 hover:text-gray-900 font-semibold transition-all"
              onClick={() => setIsSubscribesDisplayed(!isSubscribesDisplayed)}
            >
              <label className="font-bold">1</label> Following
            </p>
          </div>
          <div className="flex relative justify-center gap-3 mt-4">
            {isCurrentConnectedUserProfile ? (
              <button
                onClick={onEditProfile}
                className="px-6 py-2 rounded-full font-bold border-gray-300 border hover:bg-gray-200 dark:hover:text-darkPrimary"
              >
                Edit
              </button>
            ) : (
              <button className="px-6 py-2 rounded-full font-bold border-gray-300 border hover:bg-gray-200 dark:hover:text-darkPrimary">
                Follow
              </button>
            )}
            {isCurrentConnectedUserProfile && (
              <button
                onClick={() => setIsShareOpen(!isShareOpen)}
                disabled={isShareOpen ? false : true}
                className="hover:bg-gray-200 px-4 py-2 rounded-full border-gray-300 border disabled:opacity-50 dark:hover:text-darkPrimary"
              >
                <VShare className="w-4 h-4 opacity-75" />
              </button>
            )}
            <button
              onClick={() => setIsPageReportModal(true)}
              className="px-4 py-2 rounded-full border-gray-300 border hover:bg-gray-200 dark:hover:text-darkPrimary"
            >
              <DotsVector className="w-4 h-4" />
            </button>
            <ProfileReportOption
              isPageReport={!isPageReportModal}
              setIsPageReport={setIsPageReportModal}
              isCurrentConnectedUserProfile={isCurrentConnectedUserProfile}
            />
            <ShareContainer isShareOpen={isShareOpen} />
          </div>
        </div>
        <Tab.Group defaultIndex={1}>
          <TabList />
          <Tab.Panels>
            <div className="mx-auto">
              <div className="flex items-center justify-around w-full">
                <div className="flex  py-4 space-x-2 lg:overflow-x-hidden overflow-x-scroll scrollbar-hide ">
                  <div className="flex px-10 space-x-3 py-4 border dark:border-gray-500 rounded-full justify-center items-center">
                    <Block className="w-6 h-6 dark:fill-white" />
                    <button className="font-bold">Blockchain</button>
                  </div>
                  <div className="flex px-10 space-x-3 py-4 border dark:border-gray-500 rounded-full justify-center items-center">
                    <Collections className="w-6 h-6 dark:fill-white" />
                    <button className="font-bold">Collections</button>
                  </div>
                  <div className="flex px-10 space-x-3 py-4 border dark:border-gray-500 rounded-full justify-center items-center">
                    <Block className="w-4 h-4 dark:fill-white" />
                    <button className="font-bold">Blockchain</button>
                  </div>
                </div>
              </div>
              <Tab.Panel className="pb-10">
                <SaleContainer
                  nfts={searchedUserProfileNfts.nfts}
                  metadata={searchedUserProfileNfts.metadata!}
                  isLoading={searchedUserProfileNfts.isLoading}
                />
              </Tab.Panel>
              <Tab.Panel className="pb-10">
                <OwnedContainer
                  nfts={searchedUserProfileNfts.nfts}
                  metadata={searchedUserProfileNfts.metadata!}
                  isLoading={searchedUserProfileNfts.isLoading}
                />
              </Tab.Panel>
              <Tab.Panel className="pb-10">
                <CreatedContainer
                  nfts={searchedUserProfileNfts.nfts}
                  metadata={searchedUserProfileNfts.metadata!}
                  isLoading={searchedUserProfileNfts.isLoading}
                  walletAddress={searchedUserProfile.walletAddress}
                />
              </Tab.Panel>
              <Tab.Panel className="pb-10">
                <ActivityContainer />
              </Tab.Panel>
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div
        onClick={() => {
          setIsSubscribesDisplayed(!isSubscribesDisplayed);
        }}
        className={`${
          isSubscribesOpen
            ? "hidden"
            : "z-30 h-full flex transition-all justify-center bg-black bg-opacity-60 items-center fixed top-0 left-0 right-0 bottom-0 backdrop-filter backdrop-blur-md"
        }`}
      >
        <SubScribesContainer />
      </div>
    </div>
  );
}

export default ProfileContainer;
