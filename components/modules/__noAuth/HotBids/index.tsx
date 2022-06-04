import React, { useRef } from "react";
import {
  VChevronLeft,
  VChevronRight,
} from "@components/modules/__modules__/_vectors";

import AllHotBids from "./AllHotBids";
import useSideScroll from "@components/hooks/useSideScroll";
import Carousel from "@components/modules/__modules__/Carousel/Carousel";

const HotBids = () => {
  return (
    <>
      <div className="flex  2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit px-6">
        <h1 className="mb-6 font-bold text-xl text-black font-ibmPleSans md:text-2xl lg:text-3xl ">
          Hot Bids 🔥
        </h1>
      </div>

      <div className="flex justify-center items-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit">
        <Carousel>
          <div className="md:w-max sm:w-full m-0">
            <AllHotBids />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HotBids;
