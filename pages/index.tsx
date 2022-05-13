/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../components/LandingPage";
import { Button } from "antd";
import { useState } from "react";
import ConnectWallets from "../components/modules/__auth";
import { CrossVector } from "../components/modules/__modules__/_vectors/";
import { web3Actions } from "../lib/web3";

const Home: NextPage = () => {
  const [openWalletMenu, setOpenWalletMenu] = useState(true);

  return (
    <div className="h-screen">
      <Head>
        <title>Ongama</title>
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
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl mb-4">ONGAMA NFT MARKET</h1>
        <div
          className={`relative ${
            openWalletMenu ? "hidden" : ""
          }  bottom-2 rounded-lg shadow-lg transition-all duration-300 `}
        >
          <div
            className="fixed inset-0 backdrop-filter backdrop-blur-lg bg-opacity-50 overflow-y-auto h-full w-full"
            id="my-modal"
          ></div>
          <div className="absolute top-2 -right-8 flex place-content-end ">
            <Button
              onClick={() => {
                setOpenWalletMenu((prev) => !prev);
              }}
              className="rounded-full p-2 "
            >
              <CrossVector className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <ConnectWallets openWalletMenu />
          </div>
        </div>

        <Button
          type="primary"
          onClick={() => {
            setOpenWalletMenu((prev) => !prev);
          }}
          className={` ${
            openWalletMenu ? "" : "hidden"
          } text-xl flex justify-center items-center  rounded-md text-black font-medium `}
        >
          Connect to your Wallet
        </Button>

        <Button
          type="primary"
          className="text-black my-5"
          onClick={web3Actions.connectWallet}
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Home;
