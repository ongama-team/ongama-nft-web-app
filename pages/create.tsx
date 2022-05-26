/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import CreateNftPage from "@components/CreateNftPage";
import Head from "next/head";

const create = () => {
  return (
    <>
      <Head>
        <title>Ongama | Create NFT</title>
        <meta name="description" content="NFT marketplace" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CreateNftPage />
    </>
  );
};

export default create;
