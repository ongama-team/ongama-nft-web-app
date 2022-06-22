import React, { useRef } from "react";
import Carousel from "@components/modules/__modules__/Carousel/Carousel";
import TrendingNFTCard from "@components/modules/__modules__/Card/TrendingNFTsCard";
import { dummy_data } from "../Presentation/dummy_data";

const TrendingNFTs = () => {
  return (
    <>
      <div className=" 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit px-6">
        <h2 className="font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl">
          Trending NFTs
        </h2>
        <div className="flex items-center mx-auto h-fit">
          <Carousel>
            <div className="flex font-ibmPlexSans py-6">
              {dummy_data?.hotCollections.map(
                ({ name, profileUrl, bannerUrl, volumeTraded, isVerified }) => (
                  <TrendingNFTCard
                    key={name}
                    profileUrl={profileUrl}
                    bannerUrl={bannerUrl}
                    name={name}
                    volumeTraded={volumeTraded}
                    isVerified={isVerified}
                  />
                )
              )}
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default TrendingNFTs;
