/* eslint-disable @next/next/no-img-element */
import { dummy_data } from "@components/modules/__noAuth/Presentation/dummy_data";
import React from "react";

const SubScribesContainer = () => {
  const { staticImages } = dummy_data;

  return (
    <>
      <div className="border relative bg-white m-4 p-6 rounded-2xl max-h-[35rem] overflow-y-scroll w-[30rem] custom-scroll-bar">
        <p className="text-2xl font-bold">followers</p>
        {staticImages.map((item, index) => {
          return (
            <div key={index} className="mt-6 flex justify-between">
              <div className="flex items-center space-x-3">
                <div className="object-cover bg-teal-500 w-16 h-full max-w-[80px] max-h-[80px] rounded-full overflow-hidden">
                  <img
                    className="w-full max-"
                    src={item.url}
                    alt="Profile picture"
                  />
                </div>
                <div className="w-full">
                  <p className="font-bold text-lg w-40 text-ellipsis overflow-hidden whitespace-nowrap">
                    {item.name}
                  </p>
                  <p className="font-medium text-stone-600">10 followers</p>
                </div>
              </div>
              <button className="w-full max-w-[100px] rounded-full transition-all bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium">
                Follow
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SubScribesContainer;
