import React from "react";
import Card from "../../../__modules__/Card";

const Items = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center my-5">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap border border-gray-200 rounded-xl m-2 w-64 mobile:w-full"
            >
              <Card key={index} />
            </div>
          );
        })}
      </div>
      <div className="w-full bg-gradient-to-r p-[3px] from-[#7928ca] to-pink-600 rounded-3xl">
        <button className="w-full py-2 bg-white rounded-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7928ca] to-pink-600 font-semibold">
            {" "}
            Load More
          </span>
        </button>
      </div>
    </div>
  );
};

export default Items;
