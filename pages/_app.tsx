import type { AppProps } from "next/app";

import "antd/dist/antd.min.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
