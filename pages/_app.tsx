import type { AppProps } from "next/app";

import "antd/dist/antd.min.css";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { Web3ReactProvider } from "@web3-react/core";
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  const library = new Web3Provider(provider, "any");
  library.pollingInterval = 15000;
  return library;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </RecoilRoot>
  );
};

export default MyApp;
