import React from "react";
import NFTCard from "@components/modules/__modules__/Card/NftCard";
import { dummy_data } from "@components/modules/__noAuth/Presentation/dummy_data";

const CreatedContainer = () => {
  const { staticImages } = dummy_data;
  return (
    <div className="flex flex-wrap justify-start my-5">
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div
            key={index}
            className="border border-gray-200 dark:border-darkPrimary rounded-xl m-2 w-64 mobile:w-full"
          >
            <NFTCard
              key={index}
              nftUrl={staticImages[1].url}
              nftName="Monkey King"
              nftPrice="3.03"
              ownerName="Jozzy #2020"
              isBuyAvailable={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CreatedContainer;
