/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import truncateAddress from "@lib/helper/truncateAddress";
import { VEthereum } from "@components/modules/__modules__/_vectors";
import UserAvatarCard from "@components/modules/__modules__/Card/UserAvatarCard";
import { useRouter } from "next/router";

interface IProps {
  profile: {
    avatar: string;
    profileImage: string;
    name: string;
    address: string;
  };
}

const AvatarAndCover: FC<IProps> = ({ profile }) => {
  const { avatar, name, address } = profile;
  const minifiedAddress = truncateAddress(address, 6, 3);
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src={avatar}
          alt={name}
          className="h-[260px] w-full object-cover rounded-2xl"
        />
        <div className="w-full flex justify-center">
          <UserAvatarCard
            identiconSize={100}
            onUserAvatarClicked={() => router.push(`/profile/${address}`)}
            userWalletAddress={address}
            identiconContainerClassName={
              "bg-white -mt-20 p-5 rounded-full border-1 border-gray-400"
            }
            userAvatarClassName={
              "h-[120px] w-[120px] object-cover -mt-20 border-4 border-white border-solid rounded-full"
            }
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-center py-5 text-2xl font-ibmPlexSans font-semibold">
          {name}
        </p>
        <div
          className="flex justify-center items-center
         font-ibmPlexSans mobile:flex-col"
        >
          <p className="text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">
            {name} collection
          </p>
          <p className="flex items-center mx-5 bg-gray-200 text-gray-500 px-1 py-1 rounded-2xl mobile:my-4">
            <span>
              <VEthereum className="text-blue-500 ml-1" />
            </span>
            <span className="px-3">{minifiedAddress}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvatarAndCover;
