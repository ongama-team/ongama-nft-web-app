/* eslint-disable @next/next/no-img-element */
import {
  DotsVector,
  Ethereum,
  ShareVector,
  VGlobe,
} from "@components/modules/__modules__/_vectors";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

import Image from "next/image";
import React from "react";
import Header from "../../_noAuth/Header";
import { dummy_data } from "../../_noAuth/Presentation/dummy_data";
import { FaSwift } from "react-icons/fa";
function ProfileContainer() {
  const { staticImages, coverImages } = dummy_data;

  return (
    <>
      <Header />
      <div className="lg:mx-[12rem] mx-[1rem] rounded-lg ">
        <div className="z-10 lg:h-[15rem] h-[10rem] mt-[79px] border rounded-2xl overflow-hidden">
          <img
            src={coverImages[2].url}
            alt="cover image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative lg:w-[8rem] w-[7rem] h-[7rem] lg:h-[8rem] ring-4 mx-auto overflow-hidden rounded-full shadow-lg -mt-[5rem] lg:-mt-[6rem]">
          <img
            src={staticImages[11].url}
            alt="profile cover"
            className="object-cover w-full h-full"
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
            <button className="h-5 w-20 text-xs rounded-full border border-gray-600">
              +1 more
            </button>
          </div>
          <p className="text-center mt-4">{staticImages[11].bio}</p>

          <div className="flex justify-center items-center space-x-1 mt-4">
            <VGlobe className="opacity-70 w-4 h-4" />
            <p>Twitter.com</p>
          </div>

          <div className="flex mt-4 space-x-2 justify-center">
            <p>
              <label className="font-bold">20</label> followers
            </p>
            <p>
              {" "}
              <label className="font-bold">1</label> following
            </p>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            <button className="px-6 py-2 rounded-full font-bold border-gray-300 border ">
              Edit
            </button>
            <button className="px-4 py-2 rounded-full border-gray-300 border ">
              <ShareVector className="w-4 h-4 opacity-75" />
            </button>
            <button className="px-4 py-2 rounded-full border-gray-300 border ">
              <DotsVector className="w-4 h-4" />
            </button>
          </div>
        </div>
        <Tab.Group defaultIndex={1}>
          <Tab.List
            className={
              "p-2 mb-2 text-gray-600 flex justify-center space-x-6 mx-auto mt-3 lg:max-w-xs"
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
            <div className="mx-auto border-t lg:max-w-xs">
              <div>
                <div className="flex overflow-x-scroll">
                  <button className="px-20 py-2 rounded-full font-bold border-gray-300 border ">
                    Edit
                  </button>
                  <button className="px-20 py-2 rounded-full font-bold border-gray-300 border ">
                    Edit
                  </button>
                  <button className="px-20 py-2 rounded-full font-bold border-gray-300 border ">
                    Edit
                  </button>
                </div>
                <div>
                  <FaSwift />
                </div>
              </div>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
              <Tab.Panel>Content 4</Tab.Panel>
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

export default ProfileContainer;
