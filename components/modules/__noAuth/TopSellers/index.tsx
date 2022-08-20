import React from "react";
import AllTopSellers from "./AllTopSellers";

const TopSellers = () => {
  return (
    <div className="flex flex-col justify-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto mb-10 mt-24">
      <div className="font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl">
        <span className="dark:text-white px-2">Top</span>
        <select
          name="days"
          className="bg-transparent font-bold border-none outline-none text-blue-500 px-1"
        >
          <option defaultChecked value="1" className="text-sm border-none py-2">
            sellers
          </option>
          <option value="7" className="text-black text-sm  py-2">
            buyers
          </option>
        </select>
        <span className="dark:text-white px-2">in</span>
        <select
          name="days"
          className="bg-transparent font-bold border-none outline-none text-blue-500 px-1"
        >
          <option defaultChecked value="1" className="text-sm border-none py-0">
            1 day
          </option>
          <option value="7" className="text-black text-sm  py-2">
            2 days
          </option>
        </select>
      </div>
      <AllTopSellers />
    </div>
  );
};

export default TopSellers;
