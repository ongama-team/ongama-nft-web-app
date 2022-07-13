/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
  return (
    <div className="h-fit dark:bg-darkPrimary transition-all pb-10">
      <Head>
        <title>Ongama | Best NFT Market</title>
        <meta name="description" content="NFT marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  );
};

export default Home;
