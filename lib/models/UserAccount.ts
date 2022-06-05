export interface UserAccount {
  id: string;
  walletAddress: string;
  username: string;
  usernameLowercase?: any;
  avatarUrl: string;
  avatarUrlThumbnail?: any;
  avatarUrlCompressed?: any;
  coverUrl?: any;
  coverThumbnailUrl?: any;
  userBio: string;
  banned: boolean;
  verified: boolean;
  active: boolean;
  salesCount: number;
  buysCount: number;
  buysTotalAmount: number;
  notAllowedToMint: boolean;
  nftsCount: number;
  nftsOwnCount: number;
}
