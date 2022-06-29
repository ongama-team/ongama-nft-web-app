export interface SignResult {
  signature: string;
  data: string;
}

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
  url: string;
  urlCompressed?: string;
  urlMedium?: string;
  urlThumbnail?: string;
}
