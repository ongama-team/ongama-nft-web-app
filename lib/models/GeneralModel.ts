import { UserAccount } from "./UserAccount";

export interface SignResult {
  signature: string;
  data: string;
}

export interface IGetRequestNFTsParams {
  limit?: number;
  page?: number;
  minPrice?: number;
  maxPrice?: number;
  sortField?: string;
  sortOrder?: "desc" | "asc";
  walletAddress?: string;
}

export interface NFTMetaData {
  page: number;
  totalPages: number;
  totalNfts: number;
}

export type NFTData = {
  id: string;
  tokenUri: string;
  creatorId: string;
  creatorAddress: string | null;
  ownerId: string;
  ownerAddress: string;
  dropId: number | null;
  mintTransactionHash: string | null;
  tokenID: number | null;
  name: string;
  priority: number | null;
  description: string;
  fileSize: number | null;
  listed: boolean;
  listedOnchain: boolean;
  verified: boolean;
  image: string | null;
  url: string;
  urlCompressed: string | null;
  urlThumbnail: string | null;
  price: number;
  storageFee: number;
  storageFeeTransaction: string;
  fileType: string;
  isVideo: boolean;
  active: boolean;
  owner: UserAccount;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export interface NFT {
  category?: string;
  oldDropID?: string;
  dropId?: number;
  tokenUri: string;
  description: string;
  fileSize: number;
  fileType: string;
  name: string;
  ownerAddress: string;
  price: number;
  storageFee: number;
  storageFeeTransaction: string;
  url?: string;
  urlCompressed?: string;
  urlMedium?: string;
  urlThumbnail?: string;
  owner?: UserAccount;
}
