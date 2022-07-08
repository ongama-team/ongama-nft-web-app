import Link from "next/link";
import React from "react";
import { VDotHorizontal } from "../../../__modules__/_vectors";

const Menu = () => {
  const onDotVectorClick = () => {
    console.log("dot vector click");
  };

  return (
    <div className="min-md:hidden block">
      <ul className="flex justify-between font-ibmPlexSans font-bold mr-2 min-lg:mx-5 items-center text-gray-400">
        <li className="min-lg:pr-3 hover:text-black transition-all">Explore</li>
        <li className="min-lg:px-3 hover:text-black transition-all cursor-pointer">
          My Profile
        </li>
        <li className="min-lg:px-3 hover:text-black transition-all cursor-pointer">
          Following
        </li>
        <li className="min-lg:px-3 hover:text-black transition-all cursor-pointer">
          Activity
        </li>
        <li className="hidden min-xl:block mx-3">
          <button onClick={onDotVectorClick}>
            <VDotHorizontal className="h-6 w-6 hover:text-black transition-all" />
          </button>
        </li>
        <li className="min-xl:hidden hover:text-black transition-all cursor-pointer">
          How it works
        </li>
        <li className="min-xl:hidden hover:text-black transition-all cursor-pointer">
          Community
        </li>
      </ul>
    </div>
  );
};

export default Menu;
