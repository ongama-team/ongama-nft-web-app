import { Tab } from "@headlessui/react";
import React from "react";

const TabList = () => {
  return (
    <Tab.List className="border-b-2 mt-5">
      <Tab.List
        className={
          "text-gray-600 flex justify-around space-x-6 mx-auto max-w-md mt-3"
        }
      >
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 border-gray-800 font-extrabold text-gray-900 py-2"
              : "bg-white text-black py-2"
          }
        >
          On Sale
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 border-gray-800 font-extrabold text-gray-900 py-2"
              : "bg-white text-black py-2"
          }
        >
          Owned by
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 border-gray-800 font-extrabold text-gray-900 py-2"
              : "bg-white text-black py-2"
          }
        >
          Created
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 border-gray-800 font-extrabold text-gray-900 py-2"
              : "bg-white text-black py-2"
          }
        >
          Activity
        </Tab>
      </Tab.List>
    </Tab.List>
  );
};

export default TabList;
