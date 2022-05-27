import axios, { AxiosResponse } from "axios";
import jsCookie from "js-cookie";

const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}`,
});

const requestHandler = (request: any) => {
  if (!request.headers.address && process.browser) {
    request.headers.address = jsCookie.get("_anft_user_address") || "";
  }
  if (process.browser) {
    request.headers["Accept-Language"] =
      jsCookie.get("_anft_language") || request.headers["Accept-Language"];
  }
  return request;
};

const errorHandler = (err: any) => {
  throw err;
};

export const successHandler = (response: AxiosResponse<any, any>) => response;

http.interceptors.request.use((request: any) => requestHandler(request));

http.interceptors.response.use(
  (response: any) => successHandler(response),
  (error: any) => errorHandler(error)
);

export default http;
