/* eslint-disable @next/next/no-img-element */
import React from "react";
import { dummy_data } from "@components/modules/__noAuth/Presentation/dummy_data";

const ActivityByListing = () => {
  const { staticImages } = dummy_data;
  return (
    <div className="flex flex-col mt-2">
      {Array.from({ length: 2 }).map((_, index) => {
        return (
          <div
            key={index}
            className="flex my-3 border border-gray-200 dark:border-gray-500 p-5 rounded-3xl"
          >
            <div>
              <img
                src={staticImages[0].url}
                alt={staticImages[0].name}
                className="w-20 h-20 object-cover rounded-xl"
              />
            </div>
            <div className="px-4 h-auto flex flex-col justify-between font-ibmPlexSans">
              <div>
                <p className="font-semibold mb-1">{staticImages[0].name}</p>
                <p>
                  <span className="text-gray-400">Listed by You</span>
                </p>
              </div>
              <p className="text-gray-400">20 minutes ago</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityByListing;
