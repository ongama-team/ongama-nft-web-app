import React from "react";
import { Tab } from "@headlessui/react";
import ActivityByLising from "./ActivityByListing";
import NotFound from "../module/NotFound";
import ActivityFilters from "./ActivityFilters";

const ActivityContainer = () => {
  return (
    <div>
      <Tab.Group>
        <div className="flex justify-between min-md:flex-col">
          <div className="w-full">
            <Tab.Panels>
              <Tab.Panel>
                <ActivityByLising />
              </Tab.Panel>
              <Tab.Panel>
                <NotFound content={"Purchases"} />
              </Tab.Panel>
              <Tab.Panel>
                <NotFound content={"Sales"} />
              </Tab.Panel>
              <Tab.Panel>
                <NotFound content={"Transfered Nfts"} />
              </Tab.Panel>
              <Tab.Panel>
                <NotFound content={"Likes"} />
              </Tab.Panel>
            </Tab.Panels>
          </div>
          <div>
            <ActivityFilters />
          </div>
        </div>
      </Tab.Group>
    </div>
  );
};

export default ActivityContainer;
