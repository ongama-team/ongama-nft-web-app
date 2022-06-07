/* eslint-disable @next/next/no-img-element */
import React from "react";
import { dummy_data } from "../../../__noAuth/HotBids/dummy_data";
import {
  HeartVector,
  Ethereum,
  DotsVector,
} from "@components/modules/__modules__/_vectors";
import { VerifiedImg } from "@lib/Resources";

const HotBidsCard = () => {
  const { hotBidsData } = dummy_data;
  return (
    <div className="md:grid md:grid-rows-1 gap-x-5 gap-y-4 md:grid-flow-col grid-flow-col-dense grid grid-rows-1 ">
      {hotBidsData &&
        hotBidsData.map((item) => {
          return (
            <div
              className="w-80   md:w-60 p-4 m-1 border-2 bg-white rounded-xl relative "
              key={item.id}
            >
              <div className=" flex justify-between  items-center ">
                <div className="flex -space-x-1 ">
                  {item.buyers.map((buyer, index) => {
                    return (
                      <div className="relative " key={index}>
                        <img
                          src={buyer}
                          alt="buyer"
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white "
                        />
                        <img
                          src={VerifiedImg.src}
                          alt="checkmark"
                          className="h-8 absolute bottom-[-10px] left-3"
                        />
                      </div>
                    );
                  })}
                </div>

                <DotsVector
                  className="font-black text-gray-400
             mr-3 mb-4 hover:bg-gray-100 w-8 h-8 p-1 rounded-full"
                />
              </div>
              <img
                src={item.url}
                alt={item.title}
                className="rounded-2xl mt-6 object-fill h-auto w-30"
              />
              <div className="flex justify-between items-center mt-6 mb-2">
                <h2 className="font-bold text-sm text-gray-700">
                  {item.title}
                </h2>
                <Ethereum className="w-5 h-5text-blue-400" />
              </div>
              <h2 className="font-bold text-sm m-2-0 text-gray-500">
                {item.subTitle}
              </h2>

              <div className="flex justify-between items-center">
                <h2 className="font-bold  m-o text-blue-400">
                  {item.price} wETH
                </h2>
                <div className="flex items-center font-bold text-sm m-2-0 text-gray-500">
                  <HeartVector className="w-5 h-5 font-bold" />
                  <span className=" ml-1 text-sm">{item.likes}</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HotBidsCard;
