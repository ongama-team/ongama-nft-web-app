import React from "react";
import DotHorizontalVector from "../../vectors/dotHorizontalVector";

const Menu = () => {
  const onDotVectorClick = () => {
    console.log("dot vector click");
  };

  return (
    <div className="min_md:hidden block">
      <ul className="flex justify-between font-IBEM_Plex_Sans mr-2 min_lg:mx-5 items-center">
        <li className="min_lg:pr-3">Explore</li>
        <li className="min_lg:px-3">My Profile</li>
        <li className="min_lg:px-3">Following</li>
        <li className="min_lg:px-3">Activity</li>
        <li className="hidden min_xl:block mx-3">
          <DotHorizontalVector onClick={onDotVectorClick} />
        </li>
        <li className="min_xl:hidden">How it works</li>
        <li className="min_xl:hidden">Community</li>
      </ul>
    </div>
  );
};

export default Menu;
