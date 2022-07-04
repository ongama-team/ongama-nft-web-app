export interface classNameInterface {
  className: string;
}

export const defaultVectorProps: classNameInterface = {
  className: "h-6 w-6",
};

export interface updateProfileInterface {
  walletAddress: string;
  username?: string;
  userBio?: string;
  avatarUrl?: string;
  avatarUrlCompressed?: string;
  avatarUrlThumbnail?: string;
  coverThumbnailUrl?: string;
  coverUrl?: string;
  signature: string;
}
