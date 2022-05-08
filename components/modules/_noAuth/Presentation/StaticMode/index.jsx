/* eslint-disable @next/next/no-img-element */
import React from "react";
import { dummy_data } from "../dummy_data";

const StaticMode = () => {
  const { staticImages } = dummy_data;
  return (
    <div className="md:grid md:grid-rows-2 gap-3 gap-y-3 md:grid-flow-col grid-flow-col-dense grid grid-rows-1 min-md:overflow-x-auto min-md:scrollbar-hide">
      {staticImages.map((staticImage, index) => {
        return (
          <div
            key={index}
            className="relative 2xl:h-64 2xl:w-64 xl:h-56 xl:w-56 lg:w-44 lg:h-44 md:h-32 md:w-32 h-32 w-32 cursor-pointer"
          >
            <div className="h-full">
              <img
                src={staticImage.url}
                alt={staticImage.name}
                className="rounded-2xl object-fill md:h-[inherit] md:w-auto h-32 w-32"
              />
            </div>
            <p className="absolute top-0 text-white px-5 py-5 text-sm w-full font-IBEM_Plex_Sans transition-all ease-in-out duration-500">
              {staticImage.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StaticMode;
