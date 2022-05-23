import type { AppProps } from "next/app";

import "antd/dist/antd.min.css";
import "../static/styles/globals.css";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
