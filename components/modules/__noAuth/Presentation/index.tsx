import React from "react";
import StaticMode from "./StaticMode";
import StoryPresentation from "./StoryPresentation";
import Carousel from "@components/modules/__modules__/Carousel/Carousel";

const Presentation = () => {
  return (
    <div className="pt-24 flex justify-center items-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit px-5">
      <Carousel canBeDisabled={true}>
        <div className="presentation-grid md:w-max sm:w-full">
          <StoryPresentation />
          <StaticMode />
        </div>
      </Carousel>
    </div>
  );
};

export default Presentation;
