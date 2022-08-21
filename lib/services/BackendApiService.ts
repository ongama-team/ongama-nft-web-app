import { UserAccount } from "@lib/models/UserAccount";
import http from "@lib/http";
import * as Sentry from "@sentry/nextjs";
import { orderObject } from "@lib/Utils";
import { IUpdateProfile } from "@lib/@Types";
import {
  IGetRequestNFTsParams,
  NftCardData,
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
  }: IUpdateProfile): Promise<any | null> {
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

  async mintNft(nftData: NftCardData) {
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

  async transferNFT(): Promise<any | null> {
    try {
      const transferNftEndpoint = "";
      const response = await http.post(transferNftEndpoint, orderObject({}));

      return response;
    } catch (e) {
      Sentry.captureException(e);
      return null;
    }
  }
}

export const backendApiService = new BackendApiService();
