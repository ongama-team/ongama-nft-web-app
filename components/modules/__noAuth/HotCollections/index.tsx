import React, { useRef } from "react";
import HotCollectionCard from "@components/modules/__modules__/Card/HotCollectionCard";
import { dummy_data } from "../../__noAuth/Presentation/dummy_data";
import {
  VChevronLeft,
  VChevronRight,
} from "@components/modules/__modules__/_vectors";
import useSideScroll from "@components/hooks/useSideScroll";

const HotCollections = () => {
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
    <div className="flex flex-col justify-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto px-5 my-10">
      <h2 className="font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl">
        Hot collections 💥
      </h2>
      <div className="flex justify-center items-center w-full mx-auto h-fit">
        <button
          className="z-10 w-fit h-fit rounded-full -mr-4 mobile:hidden"
          onClick={onScrollLeft}
        >
          <VChevronLeft className="bg-white px-2 py-2 border border-gray-300 rounded-full w-10 h-10 cursor-pointer" />
        </button>
        <div
          ref={scrollContainer}
          className="flex font-ibmPlexSans overflow-x-scroll py-6 scrollbar-hide"
        >
          {dummy_data?.hotCollections.map(
            ({ name, profileUrl, bannerUrl, volumeTraded, isVerified }) => (
              <HotCollectionCard
                key={name}
                profileUrl={profileUrl}
                bannerUrl={bannerUrl}
                name={name}
                volumeTraded={volumeTraded}
                isVerified={isVerified}
              />
            )
          )}
        </div>
        <button
          className="z-10 w-fit h-fit rounded-full -ml-5 mobile:hidden"
          onClick={onScrollRight}
        >
          <VChevronRight className="bg-white px-2 py-2 border border-gray-300 rounded-full w-10 h-10 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default HotCollections;
