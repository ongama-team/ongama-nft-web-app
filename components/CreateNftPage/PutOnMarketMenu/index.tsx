import React, { useState } from "react";
import {
  VBookmark,
  VInfinite,
  VTimeLapse,
} from "@components/modules/__modules__/_vectors";
import { Switch } from "antd";
import NftPreview from "../NftPreview";

interface IProps {
  onNftPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  nftPrice: string;
}

const PutOnMarketMenu = ({ onNftPriceChange, nftPrice = "0" }: IProps) => {
  const [isPutonMarketMenu, setIsPutonMarketMenu] = useState(true);

  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-3 justify-between">
        <p className="flex flex-col">
          <span className="font-bold text-blue-500 text-[18px]">
            Put on marketplace
          </span>
          <span className="text-gray-500 font-semibold">
            Enter price to allow users instantly purchase your NFT
          </span>
        </p>
        <Switch
          className={isPutonMarketMenu ? "bg-blue-500" : "bg-blue-200"}
          defaultChecked={isPutonMarketMenu}
          onClick={() => setIsPutonMarketMenu(!isPutonMarketMenu)}
        />
      </div>
      <div
        className={`flex min-md:flex-col gap-3 py-5 w-full ${
          !isPutonMarketMenu && "hidden"
        }`}
      >
        <div className="w-full h-28 border rounded-2xl flex flex-col justify-center items-center border-blue-500">
          <VBookmark className="font-bold text-2xl my-2" />
          <p className="font-bold">fixed price</p>
        </div>
        <div className="w-full h-28 border border-gray-300 dark:border-gray-500 rounded-2xl flex flex-col justify-center items-center mobile:my-2">
          <VInfinite className="font-bold text-2xl my-2" />
          <p className="font-bold">Open for bids</p>
        </div>
        <div className="w-full h-28 border border-gray-300 dark:border-gray-500 rounded-2xl flex flex-col justify-center items-center">
          <VTimeLapse className="font-bold text-2xl my-2" />
          <p className="font-bold">Timed auction</p>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <label htmlFor="price" className="font-bold">
            Price
          </label>
          <div className="flex border-b-2 border-gray-200 w-full py-1">
            <input
              className="w-full outline-none bg-transparent py-1"
              type="number"
              name="price"
              placeholder="Enter price for one piece"
              onChange={onNftPriceChange}
            />
            <p className="text-gray-400">ETH</p>
          </div>
        </div>
        <div className="my-2">
          <p className="text-gray-400 font-semibold">
            Service fee{" "}
            <span className="text-black font-bold dark:text-white">2.5%</span>
          </p>
          <p className="text-gray-400 font-semibold">
            You will receive
            <span className="text-black font-bold px-2 dark:text-white">
              {nftPrice} ETH
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PutOnMarketMenu;
