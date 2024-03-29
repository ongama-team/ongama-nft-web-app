import React from "react";
import { VFlash } from "@components/modules/__modules__/_vectors";
import { Tab } from "@headlessui/react";

const NftBid = () => {
  return (
    <Tab.Panel>
      <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-500 justify-center items-center border h-36 mb-10 rounded-lg">
        <VFlash className="w-4 h-4" />
        <p>No active bids yet. Be the first to make a bid!</p>
      </div>
    </Tab.Panel>
  );
};

export default NftBid;
