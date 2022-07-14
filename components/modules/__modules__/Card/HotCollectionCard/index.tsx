/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { formatToDollars } from "helpers/numberFormatter";
import { VerifiedImg } from "@lib/Resources";

interface Props {
  profileUrl: string;
  bannerUrl: string;
  name: string;
  volumeTraded: number;
  isVerified: boolean;
}

const CollectionCard: FC<Props> = ({
  profileUrl,
  bannerUrl,
  name,
  volumeTraded,
  isVerified,
}) => {
  return (
    <div className="h-200 w-72 mobile:w-full flex-none border hover:border-2 border-slate-200 dark:border-gray-500 relative p-2 mr-4 mobile:mr-0 rounded-xl snap-center cursor-pointer">
      <section className="h-[60%]">
        <img
          src={bannerUrl}
          alt={name}
          className="w-full h-full object-cover rounded-xl border-solid border-[1px] shadow-md dark:border-none"
        />
      </section>
      <section className="absolute top-[50%] left-[6rem]">
        <div className="relative">
          <img
            src={profileUrl}
            alt={name}
            className="h-16 w-16 rounded-full ml-4 mr-4 border-solid border-2 border-white dark:border-darkPrimary"
          />
          {isVerified && (
            <img
              src={VerifiedImg.src}
              alt="verified"
              className="h-8 absolute bottom-[-7px] right-2"
            />
          )}
        </div>
      </section>
      <section className=" h-[55%] flex items-center justify-center flex-col ">
        <h4 className="text-black text-sm font-bold dark:text-white">{name}</h4>
        <span className="text-sm font-semibold text-gray-400 pt-2">
          {formatToDollars(volumeTraded)}
        </span>
      </section>
    </div>
  );
};

export default CollectionCard;
