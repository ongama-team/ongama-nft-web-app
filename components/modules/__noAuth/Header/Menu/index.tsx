/* eslint-disable @next/next/link-passhref */
import { walletAddressAtom } from "@lib/atoms";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { VDotHorizontal } from "../../../__modules__/_vectors";

const Menu = () => {
  const walletAddress = useRecoilValue(walletAddressAtom);

  const onDotVectorClick = () => {
    console.log("dot vector click");
  };

  return (
    <div className="min-md:hidden block">
      <ul className="flex justify-between font-ibmPlexSans font-bold mr-2 min-lg:mx-5 items-center text-gray-400">
        <li className="min-lg:pr-3 hover:text-black dark:hover:text-white transition-all cursor-pointer">
          Explore
        </li>
        <Link href={`/profile/${walletAddress.address}`}>
          <li className="min-lg:px-3 hover:text-black dark:hover:text-white transition-all cursor-pointer">
            My Profile
          </li>
        </Link>
        <li className="min-lg:px-3 hover:text-black dark:hover:text-white transition-all cursor-pointer">
          Following
        </li>
        <li className="min-lg:px-3 hover:text-black dark:hover:text-white transition-all cursor-pointer">
          Activity
        </li>
        <li className="hidden min-xl:block mx-3">
          <button onClick={onDotVectorClick}>
            <VDotHorizontal className="h-6 w-6 hover:text-black dark:hover:text-white transition-all" />
          </button>
        </li>
        <li className="min-xl:hidden hover:text-black dark:hover:text-white transition-all cursor-pointer">
          How it works
        </li>
        <li className="min-xl:hidden hover:text-black dark:hover:text-white transition-all cursor-pointer">
          Community
        </li>
      </ul>
    </div>
  );
};

export default Menu;
