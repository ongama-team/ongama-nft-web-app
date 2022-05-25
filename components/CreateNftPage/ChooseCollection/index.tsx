import React from "react";
import { VPlusCircleFill } from "@components/modules/__modules__/_vectors";
import { Switch } from "antd";

const ChooseCollection = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <p className="flex flex-col">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 text-[18px]">
            Unlocked once purchased
          </span>
          <span className="text-gray-500 font-semibold">
            Content will be unlocked after successfull transaction
          </span>
        </p>
        <Switch className="bg-blue-500" />
      </div>
      <div className="mt-10">
        <p className="font-bold">Choose Collection</p>
        <div>
          <button className="py-8 px-20 border border-gray-300 flex flex-col justify-center items-center my-5 rounded-2xl">
            <VPlusCircleFill className="text-5xl my-3" />
            <p className="flex flex-col">
              <span className="font-bold">Create</span>
              <span className="text-gray-400">ERC-21</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseCollection;
