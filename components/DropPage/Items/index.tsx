import React from "react";
import NFTCard from "@components/modules/__modules__/Card/NftCard";
import { dummy_data } from "../../modules/__noAuth/Presentation/dummy_data";

const Items = () => {
  const { staticImages } = dummy_data;
  return (
    <div>
      <div className="flex flex-wrap justify-center my-5">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap border border-gray-200 dark:border-darkPrimary rounded-xl m-2 w-64 mobile:w-full"
            >
              <NFTCard
                key={index}
                nftUrl={staticImages[1].url}
                nftName="Monkey King"
                nftPrice="3.03"
                likes={10}
                auction="1/1"
                ownerAvatarUrl={staticImages[3].url}
                ownerName="Jozzy #2020"
              />
            </div>
          );
        })}
      </div>
      <div className="w-full bg-gradient-to-r p-[3px] from-[#7928ca] to-pink-600 rounded-3xl">
        <button className="w-full py-2 bg-white rounded-3xl dark:bg-darkPrimary">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7928ca] to-pink-600 font-semibold">
            Load More
          </span>
        </button>
      </div>
    </div>
  );
};

export default Items;
