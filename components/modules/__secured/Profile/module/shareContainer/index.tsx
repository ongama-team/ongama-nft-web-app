import {
  VFacebook,
  VLink,
  VTelegram,
  VTwitter,
} from "@components/modules/__modules__/_vectors";
import React, { FC } from "react";

type openModel = {
  isShareOpen: boolean;
};

const ShareContainer: FC<openModel> = ({ isShareOpen }) => {
  return (
    <div
      className={` ${
        isShareOpen ? "block" : "hidden"
      } absolute z-10 border border-gray-100 shadow-xl top-12 transform transition-all bg-white rounded-xl p-2`}
    >
      <p className="text-center font-extrabold text-xl">
        Share link to this page
      </p>
      <div className="flex p-4 space-x-5">
        <div className="flex flex-col justify-center items-center">
          <div className="border-2 p-3 rounded-full">
            <VFacebook className="w-6 h-6 opacity-75" />
          </div>
          <label className="md:text-lg text-sm text-gray-500">facebook</label>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="border-2 p-3 rounded-full">
            <VTwitter className="w-6 h-6 opacity-75" />
          </div>
          <label className="md:text-lg text-sm text-gray-500">twitter</label>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="border-2 p-3 rounded-full">
            <VTelegram className="w-6 h-6 opacity-75" />
          </div>
          <label className="md:text-lg text-sm text-gray-500">telegram</label>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="border-2 p-3 rounded-full">
            <VLink className="w-6 h-6 opacity-75" />
          </div>
          <label className="md:text-lg text-sm text-gray-500">copy</label>
        </div>
      </div>
    </div>
  );
};

export default ShareContainer;
