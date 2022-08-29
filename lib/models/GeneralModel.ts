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

export interface ICreateDrop {
  creationFeeTransactionHash: string;
  creatorId: number;
  creatorAddress: string;
  creatorUsername: string;
  description: string;
  dropID: string;
  imageUrl: string;
  imageUrlThumbnail: string;
  title: string;
  collection: boolean;
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

export interface NftCardData {
  category?: string;
  oldDropID?: string;
  dropId?: number | null;
  tokenUri: string;
  description: string;
  fileSize: number | null;
  fileType: string;
  name: string;
  ownerAddress: string;
  price: number;
  storageFee: number;
  storageFeeTransaction: string;
  url?: string;
  urlCompressed?: string | null;
  urlMedium?: string;
  urlThumbnail?: string | null;
  owner?: UserAccount;
}

export function NftModelToCardData(nftModel: NFTData): NftCardData {
  const nftCardData: NftCardData = {
    dropId: nftModel.dropId,
    tokenUri: nftModel.tokenUri,
    description: nftModel.description,
    fileSize: nftModel.fileSize,
    fileType: nftModel.fileType,
    name: nftModel.name,
    ownerAddress: nftModel.ownerAddress,
    price: nftModel.price,
    storageFee: nftModel.storageFee,
    storageFeeTransaction: nftModel.storageFeeTransaction,
    url: nftModel.url,
    urlCompressed: nftModel.urlCompressed,
    urlThumbnail: nftModel.urlThumbnail,
    owner: nftModel.owner,
  };
  return nftCardData;
}
