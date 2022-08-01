import { List } from "antd";
import React from "react";

const NFTCardFallback = () => {
  return (
    <>
      <div className="h-fit w-full transition-all flex-none border hover:border-2 border-slate-200 dark:border-gray-500 relative p-2 mobile:mr-0 rounded-xl snap-center">
        <div className="h-72 w-full bg-gray-300 animate-pulse rounded-xl" />
        <div className="flex justify-between items-center mt-3">
          <div className="h-2 w-1/2 bg-gray-300 animate-pulse rounded-sm" />
          <div className="h-2 w-1/5 bg-gray-300 animate-pulse rounded-sm" />
        </div>
        <div className="mt-3 w-full h-16 bg-gray-300 animate-pulse rounded-xl" />
        <div className="mt-3 w-full h-10 bg-gray-300 animate-pulse rounded-xl" />
      </div>
    </>
  );
};

export default NFTCardFallback;
