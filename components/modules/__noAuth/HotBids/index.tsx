import React, { useRef } from "react";
import {
  VChevronLeft,
  VChevronRight,
} from "@components/modules/__modules__/_vectors";

import AllLiveAuctions from "./AllHotBids";
import useSideScroll from "@components/hooks/useSideScroll";

const HotBids = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const sideScroll = useSideScroll();

  const onScrollLeft = () => {
    sideScroll(
      scrollContainer.current as HTMLDivElement,
      40,
      200,
      -(scrollContainer.current?.offsetWidth as number)
    );
  };

  const onScrollRight = () => {
    sideScroll(
      scrollContainer.current as HTMLDivElement,
      40,
      200,
      scrollContainer.current?.offsetWidth as number
    );
  };
  return (
    <>
      <div className="flex  2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit px-6">
        <h1 className="mb-6 font-bold text-xl text-black font-ibmPleSans md:text-2xl lg:text-3xl ml-2">
          Hot Bids 🔥
        </h1>
      </div>

      <div className="flex justify-center items-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit">
        <button
          className="z-10 w-fit h-fit rounded-full -mr-4 "
          onClick={onScrollLeft}
        >
          <VChevronLeft className="bg-white px-2 py-2 border border-gray-300 rounded-full w-10 h-10 cursor-pointer" />
        </button>

        <div
          className="overflow-x-auto scrollbar-hide  scroll-smooth"
          ref={scrollContainer}
        >
          <div className=" md:w-max sm:w-full">
            <AllLiveAuctions />
          </div>
        </div>
        <button
          className="z-10 w-fit h-fit rounded-full -ml-5 "
          onClick={onScrollRight}
        >
          <VChevronRight className="bg-white px-2 py-2 border border-gray-300 rounded-full w-10 h-10 cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default HotBids;
