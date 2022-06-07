import React, { Dispatch, FC, RefObject, SetStateAction } from "react";
import {
  VFacebook,
  VLink,
  VTelegram,
  VTwitter,
} from "@components/modules/__modules__/_vectors";
import useClickOutside from "@components/hooks/useClickOutside";
import { shareProfileLinkAtom } from "@lib/atoms";
import { useRecoilState } from "recoil";

const ShareContainer = () => {
  const [isShareOpen, setIsShareOpen] = useRecoilState(shareProfileLinkAtom);
  const clickOutsideCallback = () => {
    setIsShareOpen(!isShareOpen);
  };

  const ref = useClickOutside(clickOutsideCallback);
  return (
    <div
      ref={ref}
      className={` ${
        isShareOpen ? "scale-0 transition-all" : "scale-100 transition-all"
      } absolute z-10 border border-gray-100 shadow-xl top-12 transform transition-all bg-white rounded-xl p-2`}
    >
      <p className="text-center font-extrabold text-xl">
        Share link to this page
      </p>
      <div className="flex p-4 space-x-5">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="border p-3 rounded-full hover:border-gray-300 transition-all">
            <VFacebook className="w-6 h-6" />
          </div>
          <label className="text-xs text-gray-500">facebook</label>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="border p-3 rounded-full hover:border-gray-300 transition-all">
            <VTwitter className="w-6 h-6" />
          </div>
          <label className="text-xs text-gray-500">twitter</label>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="border p-3 rounded-full hover:border-gray-300 transition-all">
            <VTelegram className="w-6 h-6" />
          </div>
          <label className="text-xs text-gray-500">telegram</label>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="border p-3 rounded-full hover:border-gray-300 transition-all">
            <VLink className="w-6 h-6" />
          </div>
          <label className="text-xs text-gray-500">copy</label>
        </div>
      </div>
    </div>
  );
};

export default ShareContainer;
