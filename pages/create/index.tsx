/* eslint-disable @next/next/no-page-custom-font */
import React, { useEffect, useLayoutEffect } from "react";
import CreateNftPage from "@components/CreateNftPage";
import Head from "next/head";
import { useRecoilState, useRecoilValue } from "recoil";
import { walletAddressAtom, walletAtom } from "@lib/atoms";
import { useRouter } from "next/router";

const Create = () => {
  const routes = useRouter();
  const { address } = useRecoilValue(walletAddressAtom);
  const [isWalletsDisplayed, setIsWalletsDisplayed] =
    useRecoilState(walletAtom);

  useLayoutEffect(() => {
    if (!address) {
      routes.push("/");
      setIsWalletsDisplayed(!isWalletsDisplayed);
    }
  }, [address]);

  return (
    <>
      <Head>
        <title>Create NFT | Ongama</title>
        <meta name="description" content="NFT marketplace create NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateNftPage />
    </>
  );
};

export default Create;
