import Link from "next/link";
import React from "react";
import { VDotHorizontal } from "../../../__modules__/_vectors";

const Menu = () => {
  const onDotVectorClick = () => {
    console.log("dot vector click");
  };

  return (
    <div className="min-md:hidden block">
      <ul className="flex justify-between font-ibmPlexSans mr-2 min-lg:mx-5 items-center text-gray-400">
        <li className="min-lg:pr-3">Explore</li>
        <Link href="/profile" passHref>
          <li className="min-lg:px-3 hover:text-gray-800 hover:cursor-pointer">
            My Profile
          </li>
        </Link>
        <li className="min-lg:px-3">Following</li>
        <li className="min-lg:px-3">Activity</li>
        <li className="hidden min-xl:block mx-3">
          <button onClick={onDotVectorClick}>
            <VDotHorizontal className="h-6 w-6" />
          </button>
        </li>
        <li className="min-xl:hidden">How it works</li>
        <li className="min-xl:hidden">Community</li>
      </ul>
    </div>
  );
};

export default Menu;
