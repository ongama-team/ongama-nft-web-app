import React from "react";
import AvatarAndCover from "./AvatarAndCover";
import Items from "./Items";
import StatisticTable from "./StatisticTable";

const DropPage = () => {
  return (
    <div className="flex flex-col justify-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto px-5 mt-24">
      <AvatarAndCover />
      <StatisticTable />
      <Items />
    </div>
  );
};

export default DropPage;
