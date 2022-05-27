/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import CreateNftPage from "@components/CreateNftPage";
import Head from "next/head";

const create = () => {
  return (
    <>
      <Head>
        <title>Ongama | Create NFT</title>
        <meta name="description" content="NFT marketplace create NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateNftPage />
    </>
  );
};

export default create;
