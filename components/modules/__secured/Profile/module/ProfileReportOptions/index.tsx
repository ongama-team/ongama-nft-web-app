import useClickOutside from "@components/hooks/useClickOutside";
import React, { useState } from "react";

interface IProps {
  isPageReport: boolean;
  setIsPageReport: React.Dispatch<React.SetStateAction<boolean>>;
  isCurrentConnectedUserProfile: boolean;
}

const ProfileReportOption = ({
  isPageReport,
  setIsPageReport,
  isCurrentConnectedUserProfile,
}: IProps) => {
  const ref = useClickOutside(() => setIsPageReport(false));
  return (
    <div
      ref={ref}
      className={`${
        isPageReport ? "scale-0 transition-all" : "scale-100 transition-all"
      } absolute z-10 border border-gray-100 dark:border-darkLight dark:bg-darkPrimary shadow-xl top-12 -right-5 transform transition-all bg-white rounded-xl p-2 `}
    >
      <ul>
        {!isCurrentConnectedUserProfile && (
          <li className="font-bold px-3 py-2 dark:text-white cursor-pointer hover:bg-gray-100 rounded-md transition-all">
            Claim ownership
          </li>
        )}
        <li className="font-bold px-3 py-2 dark:text-white cursor-pointer hover:bg-gray-100 rounded-md transition-all">
          Report page
        </li>
      </ul>
    </div>
  );
};

export default ProfileReportOption;
