import { UserAccount } from "@lib/models/UserAccount";
import http from "@lib/http";
import * as Sentry from "@sentry/nextjs";

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
}

export const backendApiService = new BackendApiService();
