/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Identicon from "react-identicons";
import { UserAccount } from "@lib/models/UserAccount";
import CheckmarkCard from "../CheckmarkCard";

interface IProps {
  user: UserAccount;
  identiconSize: number;
  userAvatarClassName: string;
  identiconContainerClassName: string;
  allowVerifiedIcon?: boolean;
  onUserAvatarClicked?: () => void;
}

const UserAvatarCard: FC<IProps> = ({
  user,
  identiconSize,
  userAvatarClassName,
  identiconContainerClassName,
  allowVerifiedIcon = false,
  onUserAvatarClicked,
}) => {
  const { avatarUrlThumbnail, avatarUrl, walletAddress, username, verified } =
    user;
  if (!avatarUrl && !avatarUrlThumbnail)
    return (
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => null}
        onClick={() => onUserAvatarClicked}
        className={identiconContainerClassName}
      >
        <Identicon string={walletAddress} size={identiconSize} />
      </div>
    );
  return (
    <div className="flex relative">
      <img
        src={avatarUrl || avatarUrlThumbnail}
        alt={username || walletAddress}
        className={userAvatarClassName}
        onClick={() => onUserAvatarClicked}
      />
      {verified && allowVerifiedIcon && (
        <CheckmarkCard className="h-8 absolute bottom-[5px] right-1" />
      )}
    </div>
  );
};

export default UserAvatarCard;
