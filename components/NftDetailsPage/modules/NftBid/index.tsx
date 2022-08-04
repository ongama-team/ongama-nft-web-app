import React from "react";
import { VFlash } from "@components/modules/__modules__/_vectors";
import { Tab } from "@headlessui/react";

const NftBid = () => {
  return (
    <Tab.Panel>
      <div className="flex flex-col gap-4 text-gray-700 justify-center items-center border h-36 mb-10 rounded-lg">
        <p>
          <VFlash />
        </p>
        <p className="font-bold">
          No active bids yet. Be the first to make a bid!
        </p>
      </div>
    </Tab.Panel>
  );
};

export default NftBid;
