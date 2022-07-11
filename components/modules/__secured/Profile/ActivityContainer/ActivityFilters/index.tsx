import React, { useState } from "react";
import {
  VBookmark,
  VEthereum,
  Vflash,
  VTransaction,
  VFillHeart,
  CrossVector,
} from "@components/modules/__modules__/_vectors";
import { Tab } from "@headlessui/react";

const ActivityFilters = () => {
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  const toggleFilters = () => {
    setIsFilterOpened(!isFilterOpened);
  };

  return (
    <div className="relative flex flex-col w-full mx-auto">
      <div
        className={`backdrop-blur ${
          isFilterOpened
            ? "bg-black dark:bg-opacity-40 min-md:fixed bottom-0 left-0 right-0 top-0 z-20 bg-opacity-80 mobile:translate-y-[200] md:translate-x-[200] transition-all"
            : "mobile:-translate-y-[200] md:-translate-x-[200] transition-all min-md:hidden"
        }`}
      >
        <div className="hidden min-md:block text-white absolute rotate-45 border border-white right-0 m-5 p-2 rounded-full hover:bg-black hover:text-white transition-all">
          <CrossVector
            onClick={toggleFilters}
            className="h-4 w-4 cursor-pointer "
          />
        </div>
        <Tab.List
          className={`flex flex-wrap justify-center items-center bg-white dark:bg-darkPrimary ${
            isFilterOpened
              ? "min-md:absolute relative bottom-0 right-0 left-0 h-56 rounded-t-lg z-20 backdrop-blur-xl"
              : "w-80"
          }`}
        >
          <Tab
            className={({ selected }) =>
              selected
                ? "flex justify-between items-center p-2 border rounded-md m-2 bg-black dark:bg-white dark:text-darkPrimary text-white border-none"
                : "flex justify-between items-center p-2 border dark:border-gray-500 rounded-md m-2"
            }
          >
            <VBookmark />
            <span className="px-2">Listing</span>
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "flex justify-between items-center p-2 border rounded-md m-2 bg-black dark:bg-white dark:text-darkPrimary text-white border-none"
                : "flex justify-between items-center p-2 border dark:border-gray-500 rounded-md m-2"
            }
          >
            <VEthereum />
            <span className="px-2">Purchase</span>
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "flex justify-between items-center p-2 border rounded-md m-2 bg-black dark:bg-white dark:text-darkPrimary text-white border-none"
                : "flex justify-between items-center p-2 border dark:border-gray-500 rounded-md m-2"
            }
          >
            <Vflash />
            <span className="px-2">Sales</span>
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "flex justify-between items-center p-2 border rounded-md m-2 bg-black dark:bg-white dark:text-darkPrimary text-white border-none"
                : "flex justify-between items-center p-2 border dark:border-gray-500 rounded-md m-2"
            }
          >
            <VTransaction />
            <span className="px-2">Transfer</span>
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "flex justify-between items-center p-2 border rounded-md m-2 bg-black dark:bg-white dark:text-darkPrimary text-white border-none"
                : "flex justify-between items-center p-2 border dark:border-gray-500 rounded-md m-2"
            }
          >
            <VFillHeart />
            <span className="px-2">Likes</span>
          </Tab>
        </Tab.List>
      </div>
      <div className="w-full justify-center items-center fixed bottom-0 left-0 right-0 bg-white dark:bg-darkPrimary hidden min-md:flex">
        <button
          onClick={toggleFilters}
          className="bg-black dark:bg-white dark:text-darkPrimary text-white py-3 rounded-lg font-bold w-full mx-5 my-3"
        >
          Show Filters
        </button>
      </div>
    </div>
  );
};

export default ActivityFilters;
