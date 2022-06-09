/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Identicon from "react-identicons";
import { UserAccount } from "@lib/models/UserAccount";
import { VerifiedImg } from "@lib/Resources";

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
        <img
          src={VerifiedImg.src}
          alt="verifiedIcon"
          className="w-10 absolute bottom-0 right-0"
        />
      )}
    </div>
  );
};

export default UserAvatarCard;
