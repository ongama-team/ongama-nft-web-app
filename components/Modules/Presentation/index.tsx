import React, { useRef } from "react";
import StaticMode from "./StaticMode";
import StoryPresentation from "./StoryPresentation";
import ChevronRightVector from "../vectors/chevronRightVector";
import ChevronLeftVector from "../vectors/chevronLeftVector";
import useSideScroll from "../../../lib/hooks/useSideScroll";

const Presentation = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const sideScroll = useSideScroll();

  return (
    <div className="snap-x mt-20 mx-auto 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] overflow-x-auto px-5">
      <button className="z-10 absolute h-full flex items-center">
        <ChevronLeftVector
          onClick={
            () => {}
            // sideScroll(
            //   scrollContainer.current as HTMLDivElement,
            //   40,
            //   200,
            //   -(scrollContainer.current?.offsetWidth as number)
            // )
          }
          className="bg-white px-2 py-2 absolute z-10 border border-gray-300 rounded-full w-10 h-10 cursor-pointer"
        />
      </button>

      <button className="z-10 absolute h-full flex items-center">
        <ChevronRightVector
          onClick={
            () => {}
            // sideScroll(
            //   scrollContainer.current as HTMLDivElement,
            //   40,
            //   200,
            //   -(scrollContainer.current?.offsetWidth as number)
            // )
          }
          className="bg-white px-2 py-2 absolute z-10 border border-gray-300 rounded-full w-10 h-10 cursor-pointer"
        />
      </button>
      <div
        className="presentation-grid md:w-max sm:w-full snap-center scroll-smooth"
        ref={scrollContainer}
      >
        <StoryPresentation />
        <StaticMode />
      </div>
    </div>
  );
};

export default Presentation;
