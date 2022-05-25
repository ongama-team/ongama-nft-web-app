import React from "react";
import { VPlusCircleFill } from "@components/modules/__modules__/_vectors";
import { Switch } from "antd";

const ChooseCollection = () => {
  return (
    <div className="mt-10">
      <div className="mt-10">
        <p className="font-bold">Choose Collection</p>
        <button className="py-3 px-8 border border-gray-300 flex flex-col justify-center items-center my-5 rounded-2xl mobile:w-full">
          <VPlusCircleFill className="text-6xl py-3" />
          <p className="flex flex-col">
            <span className="font-bold">Create</span>
            <span className="text-gray-400">ERC-21</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default ChooseCollection;
