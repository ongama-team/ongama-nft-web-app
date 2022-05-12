import React, { useState } from "react";
import Activity from "./Activity";
import AvatarAndCover from "./AvatarAndCover";
import Items from "./Items";
import StatisticTable from "./StatisticTable";

const DropPage = () => {
  const [activeMenu, setActiveMenu] = useState("items");

  return (
    <div className="flex flex-col justify-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto px-5 mt-24">
      <AvatarAndCover />
      <StatisticTable />
      <div className="mt-10">
        <ul className="flex border-b border-gray-200 justify-center font-ibmPlexSans">
          <li
            className={`px-4 py-4 text-gray-400 ${
              activeMenu === "items" && "border-b-2 border-black text-black"
            } cursor-pointer`}
            onClick={() => setActiveMenu("items")}
          >
            Items
          </li>
          <li
            className={`px-4 py-4 text-gray-400 cursor-pointer ${
              activeMenu === "activity" && "border-b-2 border-black text-black"
            }`}
            onClick={() => setActiveMenu("activity")}
          >
            Activity
          </li>
          <li className="px-4 py-4 text-gray-400 cursor-pointer">Stats</li>
        </ul>
      </div>
      {activeMenu === "items" && <Items />}
      {activeMenu === "activity" && <Activity />}
    </div>
  );
};

export default DropPage;
