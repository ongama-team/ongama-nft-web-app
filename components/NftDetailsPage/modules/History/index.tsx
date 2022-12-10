import React from "react";
import { VFlash, VHistory } from "@components/modules/__modules__/_vectors";
import { Tab } from "@headlessui/react";

const History = () => {
  return (
    <Tab.Panel>
      <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-500 justify-center items-center border h-36 mb-10 rounded-lg">
        <VHistory className="w-6 h-6" />
        <p>No History yet.</p>
      </div>
    </Tab.Panel>
  );
};

export default History;
