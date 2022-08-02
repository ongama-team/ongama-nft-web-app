import React, { FC } from "react";
import NFTCardFallback from "../../NFTCardFallback";

const LoadNftsFallback: FC = () => {
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 pb-10 transition-all">
      {Array.from({ length: 4 }).map((_, index) => {
        return (
          <div
            key={index}
            className="max-w-full min-w-[16rem] mobile:max-w-full mobile:min-w-full"
          >
            <NFTCardFallback />
          </div>
        );
      })}
    </div>
  );
};

export default LoadNftsFallback;
