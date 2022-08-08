import React, { useState } from "react";
import ConnectWalletsModal from "@components/modules/__noAuth/ConnectWalletsModal";
import Header from "@components/modules/__noAuth/Header";
import Activity from "./Activity";
import AvatarAndCover from "./AvatarAndCover";
import dummy_profile from "./AvatarAndCover/dummy_profile";
import Items from "./Items";
import StatisticTable from "./StatisticTable";
import ProfileMenu from "@components/modules/__secured/ProfileMenu";

const DropPage = () => {
  const [activeMenu, setActiveMenu] = useState("items");

  return (
    <div className="pt-24">
      <Header />
      <div className="flex flex-col justify-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto px-5 pb-10">
        <AvatarAndCover user={dummy_profile.user} />
        <StatisticTable statisticDtata={dummy_profile.stat} />
        <div className="mt-10">
          <ul className="flex border-b border-gray-200 dark:border-b-gray-500 justify-center font-ibmPlexSans">
            <li
              className={`px-4 py-4 text-gray-400 font-semibold ${
                activeMenu === "items" &&
                "border-b-2 border-black text-black  dark:text-white dark:border-white transition-all"
              } cursor-pointer`}
              onClick={() => setActiveMenu("items")}
            >
              Items
            </li>
            <li
              className={`px-4 py-4 text-gray-400 cursor-pointer font-semibold ${
                activeMenu === "activity" &&
                "border-b-2 border-black text-black dark:text-white dark:border-white transition-all"
              }`}
              onClick={() => setActiveMenu("activity")}
            >
              Activity
            </li>
            <li className="px-4 py-4 text-gray-400 cursor-pointer font-semibold">
              Stats
            </li>
          </ul>
        </div>
        {activeMenu === "items" && <Items />}
        {activeMenu === "activity" && <Activity />}
      </div>
      <ConnectWalletsModal />
      <ProfileMenu />
    </div>
  );
};

export default DropPage;
