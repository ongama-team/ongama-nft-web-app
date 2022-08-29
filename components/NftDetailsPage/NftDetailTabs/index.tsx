import { Tab } from "@headlessui/react";
import React from "react";

const NftsDetailTabs = () => {
  return (
    <Tab.List className="my-12 dark:text-white">
      <Tab.List
        className={
          "text-gray-600 flex justify-between space-x-6 mx-auto max-w-md mt-3 bg-gray-100 dark:bg-darkLight p-1 rounded-md"
        }
      >
        <Tab
          className={({ selected }) =>
            selected
              ? "font-extrabold text-gray-900 p-3 rounded-md bg-white dark:bg-darkPrimary transition-all dark:text-white"
              : "text-black p-2 dark:bg-transparent dark:text-gray-300 font-semibold transition-all"
          }
        >
          Overview
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "font-extrabold text-gray-900 p-3 rounded-md  bg-white dark:text-white dark:bg-darkPrimary transition-all"
              : "text-black p-2 dark:bg-transparent dark:text-gray-300 font-semibold transition-all"
          }
        >
          Bids
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "font-extrabold text-gray-900 p-3 rounded-md  bg-white dark:text-white dark:bg-darkPrimary transition-all"
              : "text-black p-2 dark:bg-transparent dark:text-gray-300 font-semibold transition-all"
          }
        >
          History
        </Tab>
      </Tab.List>
    </Tab.List>
  );
};

export default NftsDetailTabs;