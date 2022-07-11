import { Tab } from "@headlessui/react";
import React from "react";

const TabList = () => {
  return (
    <Tab.List className="border-b-2 dark:border-b-gray-500 mt-5">
      <Tab.List
        className={
          "text-gray-600 flex justify-around space-x-6 mx-auto max-w-md mt-3"
        }
      >
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 border-gray-800 font-extrabold text-gray-900 py-2 dark:text-white"
              : "bg-white text-black py-2 dark:bg-transparent dark:text-gray-300 font-semibold"
          }
        >
          On Sale
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 border-gray-800 font-extrabold text-gray-900 py-2 dark:text-white"
              : "bg-white text-black py-2 dark:bg-transparent dark:text-gray-300 font-semibold"
          }
        >
          Owned by
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 border-gray-800 font-extrabold text-gray-900 py-2 dark:text-white"
              : "bg-white text-black py-2 dark:bg-transparent dark:text-gray-300 font-semibold"
          }
        >
          Created
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 border-gray-800 font-extrabold text-gray-900 py-2 dark:text-white"
              : "bg-white text-black py-2 dark:bg-transparent dark:text-gray-400 font-semibold"
          }
        >
          Activity
        </Tab>
      </Tab.List>
    </Tab.List>
  );
};

export default TabList;
