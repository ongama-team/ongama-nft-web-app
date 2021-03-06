/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Identicon from "react-identicons";
import { UserAccount } from "@lib/models/UserAccount";
import CheckmarkCard from "../CheckmarkCard";
import { useRecoilValue } from "recoil";
import { walletAddressAtom } from "@lib/atoms";

interface IProps {
  user: UserAccount;
  identiconSize: number;
  userAvatarClassName: string;
  identiconContainerClassName?: string;
  allowVerifiedIcon?: boolean;
  onUserAvatarClicked?: () => void;
}

const UserAvatarCard: FC<IProps> = ({
  user,
  identiconSize = 20,
  userAvatarClassName,
  identiconContainerClassName = "bg-white rounded-full overflow-hidden border border-gray-300 w-fit shadow-xl",
  allowVerifiedIcon = false,
  onUserAvatarClicked,
}) => {
  const connectedWallet = useRecoilValue(walletAddressAtom);
  if (!user?.avatarUrl && !user?.avatarUrlThumbnail)
    return (
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => null}
        onClick={() => onUserAvatarClicked}
        className={identiconContainerClassName}
      >
        <Identicon
          string={user?.walletAddress || connectedWallet.address}
          size={identiconSize}
        />
      </div>
    );
  return (
    <div className="flex relative">
      <img
        src={user?.avatarUrl || user?.avatarUrlThumbnail}
        alt={user?.username || user?.walletAddress}
        className={userAvatarClassName}
        onClick={() => onUserAvatarClicked}
      />
      {user?.verified && allowVerifiedIcon && (
        <CheckmarkCard className="h-8 absolute bottom-[5px] right-1" />
      )}
    </div>
  );
};

export default UserAvatarCard;
