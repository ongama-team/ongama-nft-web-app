import type { AppProps } from "next/app";
import "antd/dist/antd.min.css";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import ThemeProvider from "@components/context/ThemeProvider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default MyApp;
