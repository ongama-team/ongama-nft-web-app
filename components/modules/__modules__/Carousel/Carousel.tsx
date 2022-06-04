import useSideScroll from "@components/hooks/useSideScroll";
import React, { Children, FC, useRef } from "react";
import { VChevronLeft, VChevronRight } from "../_vectors";

type Props = {
  children: JSX.Element;
};

const Carousel: FC<Props> = ({ children }: Props) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const sideScroll = useSideScroll();

  const onScrollLeft = () => {
    sideScroll(
      scrollContainer.current as HTMLDivElement,
      40,
      200,
      -(scrollContainer.current?.offsetWidth as number)
    );
    console.log("left");
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
      <button
        className="z-10 w-fit h-fit rounded-full -mr-6"
        onClick={onScrollLeft}
      >
        <VChevronLeft className="bg-white px-2 py-2 border border-gray-300 rounded-full w-10 h-10 cursor-pointer" />
      </button>

      <div
        className="overflow-x-auto scrollbar-hide  scroll-smooth "
        ref={scrollContainer}
      >
        {children}
      </div>
      <button
        className="z-10 w-fit h-fit rounded-full  -ml-5"
        onClick={onScrollRight}
      >
        <VChevronRight className="bg-white px-2 py-2 border border-gray-300 rounded-full w-10 h-10 cursor-pointer" />
      </button>
    </>
  );
};

export default Carousel;
