/* eslint-disable @next/next/no-img-element */
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
import { useState } from "react";
import React from "react";

import ShareContainer from "./module/shareContainer";
import SubScribesContainer from "./module/subscribes";
import { useRecoilState, useRecoilValue } from "recoil";
import { subscribesAtom, walletAddressAtom } from "@lib/atoms";
import { dummy_data } from "@components/modules/__noAuth/Presentation/dummy_data";
import Header from "@components/modules/__noAuth/Header";
import OnSale from "pages/profile/sale";
import ProfileMenu from "../ProfileMenu";
import UserAvatarCard from "@components/modules/__modules__/Card/UserAvatarCard";

function ProfileContainer() {
  const isSubscribesOpen = useRecoilValue(subscribesAtom);
  const [isSubscribesDisplayed, setIsSubscribesDisplayed] =
    useRecoilState(subscribesAtom);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const walletData = useRecoilValue(walletAddressAtom);
  const { address } = walletData;

  const { staticImages, coverImages } = dummy_data;

  return (
    <>
      <Header />
      <ProfileMenu />
      <div
        onClick={() => {
          isShareOpen && setIsShareOpen(false);
        }}
        className="lg:mx-[12rem] mx-[1rem] rounded-lg"
      >
        <div className="z-10 lg:h-[15rem] h-[10rem] mt-[79px] border rounded-2xl overflow-hidden">
          <img
            src={coverImages[2].url}
            alt="cover image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative lg:w-[8rem] w-[7rem] h-[7rem] lg:h-[8rem] ring-4 mx-auto overflow-hidden rounded-full shadow-lg -mt-[5rem] lg:-mt-[6rem]">
          <UserAvatarCard
            identiconSize={100}
            userWalletAddress={address}
            onUserAvatarClicked={() => null}
            userAvatarClassName={
              "w-full h-full object-cover rounded-full cursor-pointer"
            }
            identiconContainerClassName={"w-full bg-white p-3 rounded-full"}
          />
        </div>
        <div className="mx-auto max-w-xs mt-4">
          <p className="text-center text-3xl font-bold">
            {staticImages[11].name}
          </p>
          <div className="flex justify-center mt-4 items-center space-x-6">
            <div className="flex justify-center items-center space-x-2 bg-opacity-30 bg-gray-300 p-2 rounded-full">
              <Ethereum className="w-4 h-4" />
              <p>
                {staticImages[11].nft?.slice(0, 8)}...{" "}
                {staticImages[11].nft?.slice(37)}
              </p>
            </div>
            <button className="w-[80px] p-1 font-bold text-xs rounded-full border-2 border-gray-300">
              +1 more
            </button>
          </div>
          <p className="text-center mt-4">{staticImages[11].bio}</p>

          <div className="flex justify-center items-center space-x-1 mt-4">
            <VGlobe className="opacity-70 w-4 h-4" />
            <p>Twitter.com</p>
          </div>
          <div className="flex relative space-x-4 mt-4 justify-center">
            <p
              className="hover:cursor-pointer text-gray-600 hover:text-gray-900"
              onClick={() => setIsSubscribesDisplayed(!isSubscribesDisplayed)}
            >
              <label className="font-bold">20</label> Followers
            </p>
            <p
              className="hover:cursor-pointer text-gray-600 hover:text-gray-900"
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
              } border z-20 h-full flex justify-center bg-black bg-opacity-60 items-center fixed inset-0 backdrop-filter backdrop-blur-md`}
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
                setIsShareOpen((prev) => !prev);
              }}
              className="hover:bg-gray-200 px-4 py-2 rounded-full border-gray-300 border"
            >
              <VShare className="w-4 h-4 opacity-75" />
            </button>
            <button className="px-4 py-2 rounded-full border-gray-300 border">
              <DotsVector className="w-4 h-4" />
            </button>
            <ShareContainer isShareOpen={isShareOpen} />
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
                <OnSale />
              </Tab.Panel>
              <Tab.Panel>
                <OnSale />
              </Tab.Panel>
              <Tab.Panel>
                <OnSale />
              </Tab.Panel>
              <Tab.Panel>
                <OnSale />
              </Tab.Panel>
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

export default ProfileContainer;
