import { UserAccount } from "@lib/models/UserAccount";
import http from "@lib/http";
import * as Sentry from "@sentry/nextjs";
import { orderObject } from "@lib/Utils";
import { updateProfileInterface } from "@lib/@Types";
import {
  IGetRequestNFTsParams,
  NFT,
  NFTData,
  NFTMetaData,
} from "@lib/models/GeneralModel";

class BackendApiService {
  async findAccountWhereAddressOrUsername(
    defaultAddress: string,
    params = {},
    headers = {}
  ): Promise<UserAccount | null> {
    try {
      const { data } = await http.get(`/users/${defaultAddress}`, {
        headers,
        params,
      });

      return { ...data.user } as UserAccount;
    } catch (e) {
      Sentry.captureException(e);
      return null;
    }
  }

  async findNFts(
    params?: IGetRequestNFTsParams
  ): Promise<{ nfts: NFTData[] | []; meta: NFTMetaData }> {
    const { data } = await http.get("nfts", {
      params,
    });

    console.log("reponse in services", data);
    return {
      nfts: data.nfts as NFTData[],
      meta: data.meta as NFTMetaData,
    };
  }

  async updateProfile({
    walletAddress,
    username,
    userBio,
    avatarUrl,
    avatarUrlCompressed,
    avatarUrlThumbnail,
    coverThumbnailUrl,
    coverUrl,
    signature,
  }: updateProfileInterface): Promise<any | null> {
    try {
      const profileEndpoint = "/users/profile";
      const response = await http.put(
        profileEndpoint,
        orderObject({
          walletAddress,
          username,
          userBio,
          avatarUrl,
          avatarUrlCompressed,
          avatarUrlThumbnail,
          coverThumbnailUrl,
          coverUrl,
          signature,
        })
      );

      return response;
    } catch (e) {
      Sentry.captureException(e);
      console.log(e);
      return null;
    }
  }

  async mintNft(nftData: NFT) {
    try {
      const mintNFtEndpoint = "/nfts";
      const response = await http.post(
        mintNFtEndpoint,
        orderObject({ ...nftData })
      );

      return response;
    } catch (e) {
      Sentry.captureException(e);
      return null;
    }
  }
}

export const backendApiService = new BackendApiService();
