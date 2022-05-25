/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  VEthereum,
  VQuestionMark,
} from "@components/modules/__modules__/_vectors";
import { useRecoilValue } from "recoil";
import { walletAddressAtom } from "@lib/atoms";
import minifyAddress from "@lib/helper/minifyAddress";
import { Switch } from "antd";
import DetailsForm from "./DetailsForm";
import AdvancedSettingForm from "./AdvanceSettingForm";
import Header from "@components/modules/_noAuth/Header";
import PutOnMarketMenu from "./PutOnMarketMenu";
import ChooseCollection from "./ChooseCollection";
import NftPreview from "./NftPreview";

const CreateNftPage = () => {
  const walletAddress = useRecoilValue(walletAddressAtom);
  const minifiedWalletAddress = minifyAddress(walletAddress, 10, 4);
  const onChooseFile = () => {
    document.getElementById("input-file")?.click();
  };
  return (
    <>
      <Header />
      <div className="py-20 font-ibmPlexSans w-2/4 m-auto">
        <h1 className="text-4xl font-bold">Create Single item on Ethereum</h1>
        <div className="flex mt-10 relative">
          <div>
            <div>
              <p className="font-bold">Choose wallet</p>
              <div className="my-5 py-5 border border-gray-300 flex items-center rounded-xl hover:cursor-not-allowed">
                <VEthereum className="mx-2 py-1 px-1 text-blue-500 text-4xl bg-blue-100 rounded-full" />
                <div className="mx-5">
                  <p>
                    <span className="font-bold">{minifiedWalletAddress}</span>
                    <span className="px-2 bg-green-100 mx-2 py-1 text-xs text-green-700 rounded-lg">
                      Connected
                    </span>
                  </p>
                  <p className="font-bold text-gray-500">Ethereum</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold">Upload file</p>
              <div className="border-2 border-dashed border-gray-300 my-5 py-10 rounded-xl text-center">
                <p className="text-gray-500 font-semibold">
                  PNG, GIF, WEBP, MP4 or MP3. Max 100mb
                </p>
                <input type="file" className="hidden" id="input-file" />
                <button
                  onClick={onChooseFile}
                  className="font-bold bg-blue-100 text-blue-600 py-2 px-5 my-3 rounded-3xl hover:bg-blue-200 transition-all"
                >
                  Choose file
                </button>
              </div>
            </div>
            <PutOnMarketMenu />
            <ChooseCollection />
            <div className="flex justify-between">
              <p className="flex flex-col">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 text-[18px]">
                  Free minting
                </span>
                <span className="text-gray-500 font-semibold">
                  Buyer will pay gas fees for minting
                </span>
              </p>
              <Switch className="bg-blue-500" />
            </div>
            <DetailsForm />
            <button className="my-5 w-full py-3 border border-gray-300 rounded-3xl font-bold hover:border-gray-400 transition-all">
              Show advenced settings
            </button>
            <AdvancedSettingForm />
            <p className="flex py-5 items-center text-gray-500 font-semibold">
              Unsaved changes
              <span className="px-3">
                <VQuestionMark className="font-bold bg-gray-100 py-1 px-1 text-2xl rounded-full" />
              </span>
            </p>
          </div>
          <NftPreview />
        </div>
      </div>
    </>
  );
};

export default CreateNftPage;
