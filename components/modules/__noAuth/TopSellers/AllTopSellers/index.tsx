import React from "react";
import TopSellersCard from "../../../__modules__/Card/TopSellersCard";

const AllTopSellers = () => {
  return (
    <div className="h-72 flex flex-col flex-wrap font-ibmPlexSans overflow-x-scroll px-0 py-6 scrollbar-hide">
      <TopSellersCard />
    </div>
  );
};

export default AllTopSellers;
