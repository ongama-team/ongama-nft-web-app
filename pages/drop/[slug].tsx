import React from "react";
import DropPage from "@components/DropPage";
import Head from "next/head";

const DropDetailPage = () => {
  return (
    <div className="dark:bg-darkPrimary">
      <Head>
        <title>Drop | Ongama</title>
        <meta name="description" content="NFT marketplace drop NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DropPage />
    </div>
  );
};

export default DropDetailPage;
