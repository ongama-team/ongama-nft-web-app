/* eslint-disable @next/next/no-img-element */
import { UserAccount } from "@lib/models/UserAccount";
import { NoCoverImg } from "@lib/Resources";
import { useRouter } from "next/router";
import React from "react";
import UserAvatarCard from "../UserAvatarCard";

interface IProps {
  user: UserAccount;
}

const AvatarAndCoverCard = ({ user }: IProps) => {
  const router = useRouter();

  return (
    <div className="relative">
      <img
        src={user?.coverUrl || user?.coverThumbnailUrl}
        alt={user?.username}
        className="h-[260px] w-full object-cover rounded-2xl"
      />
      <div className="w-full flex justify-center">
        <UserAvatarCard
          identiconSize={100}
          allowVerifiedIcon={true}
          onUserAvatarClicked={() =>
            router.push(`/profile/${user?.walletAddress}`)
          }
          identiconContainerClassName={
            "bg-red rounded-full overflow-hidden -mt-20 p-5 border-1 border-gray-400"
          }
          userAvatarClassName={
            "h-[120px] w-[120px] -mt-20 object-cover border-4 border-white border-solid rounded-full relative"
          }
          user={user}
        />
      </div>
    </div>
  );
};

export default AvatarAndCoverCard;
