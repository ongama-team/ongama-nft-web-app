import { UserAccount } from "@lib/models/UserAccount";
import http from "@lib/http";
import * as Sentry from "@sentry/nextjs";
import { orderObject } from "@lib/Utils";
import { NFT } from "@lib/models/GeneralModel";

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

  async updateProfile(
    walletAddress: string,
    username: string,
    userBio: string,
    avatarUrl?: string,
    avatarUrlCompressed?: string,
    avatarUrlThumbnail?: string,
    coverThumbnailUrl?: string,
    coverUrl?: string,
    signature?: string
  ): Promise<any | null> {
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
