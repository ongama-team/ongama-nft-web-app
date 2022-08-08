/* eslint-disable @next/next/link-passhref */
import React, { FC } from "react";
import { Tab } from "@headlessui/react";
import { NFTData } from "@lib/models/GeneralModel";
import {
  PolygonVectorOutLine,
  PolygonVectorSolid,
} from "@components/modules/__modules__/_vectors/polygonVector";
import { VEye } from "@components/modules/__modules__/_vectors";
import Link from "next/link";

interface IProps {
  nft: NFTData;
}

const NftOverView: FC<IProps> = ({ nft }) => {
  return (
    <Tab.Panel>
      <div className="pt-6">
        <h2 className="text-2xl font-bold dark:text-white">Description</h2>
        <p className="text-gray-500 font-bold py-2 dark:text-gray-200">
          {nft.description}
        </p>
      </div>
      <div className="pt-6">
        <h2 className="text-2xl font-bold dark:text-white">Latest Bids</h2>
        <div className="border dark:border-gray-600 dark:text-gray-200 py-5 px-3 my-2 rounded-lg text-gray-500 font-bold">
          No bids yet.
        </div>
      </div>
      <div className="py-6">
        <h2 className="text-2xl font-bold dark:text-white">Details</h2>
        <div className="border py-5 px-3 mt-3 rounded-lg dark:border-gray-600">
          <ul className="flex flex-col justify-center gap-5">
            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <PolygonVectorOutLine className="w-6 h-6" />
              <p className="font-bold">Polygon ERC-721</p>
            </li>
            <a
              href={`https://polygonscan.com/tx/${nft.mintTransactionHash}`}
              target="_blank"
              rel="noreferrer"
            >
              <li className="flex items-center gap-3 text-gray-700 dark:hover:text-white dark:text-gray-200 hover:text-black cursor-pointer">
                <PolygonVectorSolid className="w-6 h-6 transition-all" />
                <p className="font-bold transition-all">View on Polygonscan</p>
              </li>
            </a>
            <a href={nft?.url} target="_blank" rel="noreferrer">
              <li className="flex items-center gap-3 text-gray-700 dark:hover:text-white dark:text-gray-200 hover:text-black cursor-pointer">
                <VEye className="w-6 h-6 transition-all" />
                <p className="font-bold transition-all">
                  Open original on IPFS
                </p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </Tab.Panel>
  );
};

export default NftOverView;
