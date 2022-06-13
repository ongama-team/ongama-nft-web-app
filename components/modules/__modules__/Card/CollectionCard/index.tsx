/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { formatToDollars } from "../../../../../helpers/numberFormatter";
import CheckmarkCard from "../CheckmarkCard";

type Props = {
  rank: number;
  collectionProfile: string;
  collectionName: string;
  volumeTraded: number;
};

const CollectionCard: FC<Props> = ({
  rank,
  collectionProfile,
  collectionName,
  volumeTraded,
}) => {
  return (
    <div className=" flex-none h-14 w-[250px] bg-none flex items-center mx-1 my-2">
      <span className="text-gray-400">{rank}</span>
      <div className="flex">
        <section className="relative">
          <img
            src={collectionProfile}
            alt="profile"
            className="h-12 w-12 rounded-full ml-4 mr-4"
          />
          <CheckmarkCard className="h-8 absolute bottom-[-7px] right-2" />
        </section>
        <section>
          <h4 className="text-black text-sm font-bold">{collectionName}</h4>
          <span className="text-sm font-semibold text-gray-400">
            {formatToDollars(volumeTraded)}
          </span>
        </section>
      </div>
    </div>
  );
};

export default CollectionCard;
