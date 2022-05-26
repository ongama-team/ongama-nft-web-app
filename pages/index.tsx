/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Ongama | Best NFT Market</title>
        <meta name="description" content="NFT marketplace" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LandingPage />
    </div>
  );
};

export default Home;
