import React from "react";
import AllLiveAuctions from "./allLiveAuctions";
import Carousel from "@components/modules/__modules__/Carousel/Carousel";

const LiveAuctions = () => {
  return (
    <section>
      <div className="flex  2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit px-6">
        <h1 className="pt-0 mb-6 font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl ">
          Live auction 🔥
        </h1>
      </div>

      <div className="flex justify-center items-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit">
        <Carousel>
          <div className=" md:w-max sm:w-full">
            <AllLiveAuctions />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default LiveAuctions;
