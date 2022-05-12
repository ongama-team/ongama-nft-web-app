/* eslint-disable @next/next/no-img-element */
import React from "react";
import { dummy_data } from "../../Presentation/dummy_data";
import { VEthereum } from "../../../__modules__/_vectors";
import Minify from "../../../../../lib/helper/MinifyAddress";

const AvatarAndCover = () => {
  const { minifiedAddress } = Minify;
  const { staticImages } = dummy_data;
  const dummy_address = "0x0jdsj87573456uyfgsdjf8o375628v8389d";

  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className="">
          <img
            src={staticImages[4].url}
            alt={staticImages[0].name}
            className="h-[260px] w-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-full flex justify-center">
          <img
            src={staticImages[0].url}
            alt={staticImages[0].name}
            className="h-[120px] w-[120px] object-cover -mt-20 border-4 border-white border-solid rounded-full"
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-center py-5 text-2xl font-ibmPlexSans font-semibold">
          {staticImages[0].name}
        </p>
        <div
          className="flex justify-center items-center
         font-ibmPlexSans mobile:flex-col"
        >
          <p className="text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">
            {staticImages[0].name} collection
          </p>
          <p className="flex items-center mx-5 bg-gray-200 text-gray-500 px-1 py-1 rounded-2xl mobile:my-4">
            <span>
              <VEthereum className="text-blue-500 ml-1" />
            </span>
            <span className="px-3">{minifiedAddress(dummy_address)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvatarAndCover;
