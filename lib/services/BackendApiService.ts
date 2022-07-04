import { UserAccount } from "@lib/models/UserAccount";
import http from "@lib/http";
import * as Sentry from "@sentry/nextjs";
import { orderObject } from "@lib/Utils";
import { updateProfileInterface } from "@lib/@Types";

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
}

export const backendApiService = new BackendApiService();
