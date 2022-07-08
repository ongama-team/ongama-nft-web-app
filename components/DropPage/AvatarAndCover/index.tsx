/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import truncateAddress from "@lib/helper/truncateAddress";
import { VEthereum } from "@components/modules/__modules__/_vectors";
import { UserAccount } from "@lib/models/UserAccount";
import AvatarAndCoverCard from "@components/modules/__modules__/Card/AvatartAndCoverCard";

interface IProps {
  user: UserAccount;
}

const AvatarAndCover: FC<IProps> = ({ user }) => {
  const { username, walletAddress } = user;
  const minifiedAddress = truncateAddress(walletAddress, 6, 3);

  return (
    <div className="flex flex-col">
      <AvatarAndCoverCard isEditable={false} user={user} />
      <div className="w-full">
        <p className="text-center py-5 text-2xl font-ibmPlexSans font-semibold">
          {username}
        </p>
        <div
          className="flex justify-center items-center
         font-ibmPlexSans mobile:flex-col"
        >
          <p className="text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">
            {username} collection
          </p>
          <p className="flex items-center mx-5 bg-gray-200 text-gray-500 px-1 py-1 rounded-2xl mobile:my-4">
            <span>
              <VEthereum className="text-blue-500 ml-1" />
            </span>
            <span className="px-3 font-bold">{minifiedAddress}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvatarAndCover;
