import React, { useRef } from "react";
import StaticMode from "./StaticMode";
import { VChevronLeft, VChevronRight } from "../../__modules__/_vectors";
import StoryPresentation from "./StoryPresentation";
import useSideScroll from "../../../../lib/hooks/useSideScroll";

const Presentation = () => {
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
    <div className="my-24 flex justify-center items-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit px-5">
      <button
        className="z-10 w-fit h-fit rounded-full -mr-4 mobile:hidden"
        onClick={onScrollLeft}
      >
        <VChevronLeft className="bg-white px-2 py-2 z-10 border border-gray-300 rounded-full w-10 h-10 cursor-pointer" />
      </button>

      <div
        className="overflow-x-auto scrollbar-hide  scroll-smooth"
        ref={scrollContainer}
      >
        <div className="presentation-grid md:w-max sm:w-full">
          <StoryPresentation />
          <StaticMode />
        </div>
      </div>
      <button
        className="z-10 w-fit h-fit rounded-full -ml-5 mobile:hidden"
        onClick={onScrollRight}
      >
        <VChevronRight className="bg-white px-2 py-2 z-10 border border-gray-300 rounded-full w-10 h-10 cursor-pointer" />
      </button>
    </div>
  );
};

export default Presentation;
