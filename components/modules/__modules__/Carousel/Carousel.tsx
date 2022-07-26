import useSideScroll from "@components/hooks/useSideScroll";
import React, { Children, FC, useRef } from "react";
import { VChevronLeft, VChevronRight } from "../_vectors";

type Props = {
  canBeDisabled?: boolean;
  children: JSX.Element;
};

const Carousel: FC<Props> = ({ children, canBeDisabled = false }: Props) => {
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
      <button
        className={`z-10 w-fit h-fit rounded-full -mr-6 ${
          canBeDisabled && "mobile:hidden"
        }`}
        onClick={onScrollLeft}
      >
        <VChevronLeft className="bg-white dark:bg-darkPrimary dark:text-white px-2 py-2 border border-gray-300 dark:border-gray-500 hover:scale-110 transition-all rounded-full w-10 h-10 cursor-pointer" />
      </button>

      <div
        className={`overflow-x-auto w-full scrollbar-hide scroll-smooth snap-x snap-mandatory ${
          canBeDisabled && "mobile:mx-5"
        }`}
        ref={scrollContainer}
      >
        {children}
      </div>
      <button
        className={`z-10 w-fit h-fit rounded-full -ml-5 ${
          canBeDisabled && "mobile:hidden"
        }`}
        onClick={onScrollRight}
      >
        <VChevronRight className="bg-white dark:bg-darkPrimary dark:text-white px-2 py-2 border border-gray-300 dark:border-gray-500 hover:scale-110 transition-all  rounded-full w-10 h-10 cursor-pointer" />
      </button>
    </>
  );
};

export default Carousel;
