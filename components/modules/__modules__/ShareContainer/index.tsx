import React, { FC } from "react";
import {
  VFacebook,
  VLink,
  VTelegram,
  VTwitter,
} from "@components/modules/__modules__/_vectors";
import useClickOutside from "@components/hooks/useClickOutside";
import { useRecoilState } from "recoil";
import { sharePageLinkAtom } from "@lib/atoms";

const ShareContainer: FC = () => {
  const [isShareOpen, setIsShareOpen] = useRecoilState(sharePageLinkAtom);
  const ref = useClickOutside(() => setIsShareOpen(true));
  return (
    <div
      ref={ref}
      className={`${
        isShareOpen ? "scale-0 transition-all" : "scale-100 transition-all"
      } absolute z-30 border border-gray-100 dark:border-darkPrimary dark:bg-darkLight shadow-xl top-12 transform transition-all bg-white rounded-xl p-2 `}
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
