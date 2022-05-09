import React from "react";
import { VDotHorizontal } from "../../../__modules__/_vectors";

const Menu = () => {
  const onDotVectorClick = () => {
    console.log("dot vector click");
  };

  return (
    <div className="min-md:hidden block">
      <ul className="flex justify-between font-IBEM_Plex_Sans mr-2 min-lg:mx-5 items-center text-gray-400">
        <li className="min-lg:pr-3">Explore</li>
        <li className="min-lg:px-3">My Profile</li>
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
