import React, { FC } from "react";
import { formatToDollars } from "helpers/numberFormatter";
import { dummy_data } from "../../../__noAuth/TopSellers/dummy_data";
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
    <div className="h-52 w-72 flex-none border-2 border-slate-200 relative p-2 mr-4 rounded-xl">
      <section className="h-[45%]">
        <img
          src={bannerUrl}
          alt={name}
          className="w-full h-full rounded-xl border-solid border-[1px] border-gray-400"
        />
      </section>
      <section className="absolute top-[25%] left-[6rem]">
        <div className="relative">
          <img
            src={profileUrl}
            alt={name}
            className="h-16 w-16 rounded-full ml-4 mr-4 border-solid border-2 border-white"
          />
          {isVerified && (
            <img
              src={VerifiedImg}
              alt="verified"
              className="h-8 absolute bottom-[-7px] right-2"
            />
          )}
        </div>
      </section>
      <section className=" h-[55%] flex items-center justify-center flex-col ">
        <h4 className="text-black text-sm font-bold">{name}</h4>
        <span className="text-sm font-semibold text-gray-400 pt-2">
          {formatToDollars(volumeTraded)}
        </span>
      </section>
    </div>
  );
};

export default CollectionCard;
