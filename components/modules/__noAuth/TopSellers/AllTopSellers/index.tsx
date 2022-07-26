/* eslint-disable @next/next/no-img-element */
import CheckmarkCard from "@components/modules/__modules__/Card/CheckmarkCard";
import Carousel from "@components/modules/__modules__/Carousel/Carousel";
import { formatToDollars } from "helpers/numberFormatter";
import React from "react";
import { dummy_data } from "../dummy_data/index";

const AllTopSellers = () => {
  const { topSellersData } = dummy_data;
  return (
    <div className="w-full mx-auto h-fit mt-12 flex items-center">
      <Carousel canBeDisabled={true}>
        <div className="flex flex-col flex-wrap h-40 font-ibmPlexSans gap-2">
          {topSellersData.map((seller) => {
            return (
              <div
                className="flex-none h-14 w-[250px] bg-none flex items-center mx-1 my-2"
                key={seller.id}
              >
                <span className="text-gray-400">{seller.id}</span>
                <div className="flex">
                  <section className="relative">
                    <img
                      src={seller.url}
                      alt="profile"
                      className="h-12 w-12 rounded-full ml-4 mr-4"
                    />
                    <CheckmarkCard className="h-8 absolute bottom-[-7px] right-2" />
                  </section>
                  <section>
                    <h4 className="text-black text-sm font-bold dark:text-white">
                      {seller.title}
                    </h4>
                    <span className="text-sm font-semibold text-gray-400">
                      {formatToDollars(seller.price)}
                    </span>
                  </section>
                </div>
              </div>
            );
          })}
        </div>
      </Carousel>
    </div>
  );
};

export default AllTopSellers;
