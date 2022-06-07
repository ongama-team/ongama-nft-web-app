/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  Block,
  Collections,
  ControlVector,
  DotsVector,
  Ethereum,
  VShare,
  VGlobe,
} from "@components/modules/__modules__/_vectors";
import { Tab } from "@headlessui/react";
import ShareContainer from "./module/shareContainer";
import SubScribesContainer from "./module/subscribes";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { shareProfileLinkAtom, subscribesAtom } from "@lib/atoms";
import Header from "@components/modules/__noAuth/Header";
import { SaleContainer } from "@components/modules/__secured/Profile/saleContainer";
import { UserAccount } from "@lib/models/UserAccount";
import { middleEllipsis } from "../../../../helpers/truncateStrings";
import ProfileMenu from "../ProfileMenu";
import dummy_profile from "@components/DropPage/AvatarAndCover/dummy_profile";
import AvatarAndCoverCard from "@components/modules/__modules__/Card/AvatartAndCoverCard";

function ProfileContainer({ currentUser }: { currentUser: UserAccount }) {
  const isSubscribesOpen = useRecoilValue(subscribesAtom);
  const [isSubscribesDisplayed, setIsSubscribesDisplayed] =
    useRecoilState(subscribesAtom);
  const setIsShareOpen = useSetRecoilState(shareProfileLinkAtom);

  const { user } = dummy_profile;

  return (
    <>
      <Header />
      <ProfileMenu />
      <div className="lg:mx-[12rem] mx-[1rem] rounded-lg">
        <div className="mt-24">
          <AvatarAndCoverCard user={user} />
        </div>
        <div className="mx-auto max-w-xs mt-4">
          <p className="text-center text-3xl font-bold">
            {currentUser?.username}
          </p>
          <div className="flex justify-center mt-4 items-center space-x-6">
            <div className="flex justify-center items-center space-x-2 bg-opacity-30 bg-gray-300 p-2 rounded-full">
              <Ethereum className="w-4 h-4" />
              <p className="font-ibmPlexSans font-semibold text-gray-500 px-1 text-xs cursor-pointer hover:text-gray-700 transition-all">
                {middleEllipsis(user.walletAddress, 8)}
              </p>
            </div>
            <button className="w-[80px] p-1 font-bold text-xs rounded-full border-2 border-gray-300">
              +1 more
            </button>
          </div>
          <p className="text-center mt-4">{currentUser?.userBio}</p>
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
            <div
              onClick={() => {
                setIsSubscribesDisplayed(!isSubscribesDisplayed);
              }}
              className={`${
                isSubscribesOpen && "hidden"
              } border z-20 h-full flex transition-all justify-center bg-black bg-opacity-60 items-center fixed inset-0 backdrop-filter backdrop-blur-md`}
            >
              <SubScribesContainer />
            </div>
          </div>
          <div className="flex relative justify-center space-x-2 mt-4">
            <button className="px-6 py-2 rounded-full font-bold border-gray-300 border ">
              Edit
            </button>
            <button
              onClick={() => {
                setIsShareOpen(true);
              }}
              className="hover:bg-gray-200 px-4 py-2 rounded-full border-gray-300 border"
            >
              <VShare className="w-4 h-4 opacity-75" />
            </button>
            <button className="px-4 py-2 rounded-full border-gray-300 border">
              <DotsVector className="w-4 h-4" />
            </button>
            <ShareContainer />
          </div>
        </div>
        <Tab.Group defaultIndex={1}>
          <Tab.List
            className={
              "p-2 mb-2 text-gray-600 flex justify-around space-x-6 mx-auto max-w-md mt-3"
            }
          >
            <Tab
              className={({ selected }) =>
                selected
                  ? "border-b-2 border-gray-800 font-extrabold text-gray-900"
                  : "bg-white text-black"
              }
            >
              On Sale
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "border-b-2 border-gray-800 font-extrabold text-gray-900"
                  : "bg-white text-black"
              }
            >
              Owned by
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "border-b-2 border-gray-800 font-extrabold text-gray-900"
                  : "bg-white text-black"
              }
            >
              Created
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "border-b-2 border-gray-800 font-extrabold text-gray-900"
                  : "bg-white text-black"
              }
            >
              Activity
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <div className="mx-auto border-t-2">
              <div className="flex items-center justify-around w-full">
                <div className="flex  py-4 space-x-2 lg:overflow-x-hidden overflow-x-scroll">
                  <div className="flex px-10 space-x-3 py-4 border rounded-full justify-center items-center">
                    <Block className="w-6 h-6" />
                    <button className="font-bold">Blockchain</button>
                  </div>
                  <div className="flex px-10 space-x-3 py-4 border rounded-full justify-center items-center">
                    <Collections className="w-6 h-6" />
                    <button className="font-bold">Collections</button>
                  </div>
                  <div className="flex px-10 space-x-3 py-4 border rounded-full justify-center items-center">
                    <Block className="w-4 h-4" />
                    <button className="font-bold">Blockchain</button>
                  </div>
                </div>
                <div className=" rounded-xl hover:bg-gray-200 shadow-2xl bg-white p-4">
                  <button className="">
                    <ControlVector className="w-6 h-6 rotate-90" />
                  </button>
                </div>
              </div>
              <Tab.Panel>
                <SaleContainer />
              </Tab.Panel>
              <Tab.Panel>
                <SaleContainer />
              </Tab.Panel>
              <Tab.Panel>
                <SaleContainer />
              </Tab.Panel>
              <Tab.Panel>
                <SaleContainer />
              </Tab.Panel>
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

export default ProfileContainer;
