/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Identicon from "react-identicons";

interface IProps {
  userWalletAddress: string;
  userAvatarUrl?: string;
  userAvatarThumbnailUrl?: string;
  identiconSize: number;
  username?: string;
  userAvatarClassName: string;
  identiconContainerClassName: string;
  onUserAvatarClicked?: () => void;
}

const UserAvatarCard: FC<IProps> = ({
  identiconSize,
  userWalletAddress,
  userAvatarThumbnailUrl,
  userAvatarUrl,
  username,
  userAvatarClassName,
  identiconContainerClassName,
  onUserAvatarClicked,
}) => {
  if (!userAvatarUrl && !userAvatarThumbnailUrl)
    return (
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => null}
        onClick={() => onUserAvatarClicked}
        className={identiconContainerClassName}
      >
        <Identicon string={userWalletAddress} size={identiconSize} />
      </div>
    );
  return (
    <img
      src={userAvatarUrl || userAvatarThumbnailUrl}
      alt={username || userWalletAddress}
      className={userAvatarClassName}
      onClick={() => onUserAvatarClicked}
    />
  );
};

export default UserAvatarCard;
