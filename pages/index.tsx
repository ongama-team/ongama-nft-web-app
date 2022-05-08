import { Button } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import ConnectWallets from "../components/modules/__auth";
import { CrossVector } from "../components/modules/__modules__/_vectors/";
import { web3Actions } from "../lib/web3";

const Home: NextPage = () => {
  const [openWalletMenu, setOpenWalletMenu] = useState(true);

  return (
    <div className="bg-slate-800 h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              className="rounded-full bg-white p-2 "
            >
              <CrossVector className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <ConnectWallets openWalletMenu />
          </div>
        </div>

        <Button
          onClick={() => {
            setOpenWalletMenu((prev) => !prev);
          }}
          className={` ${
            openWalletMenu ? "" : "hidden"
          } text-xl flex justify-center items-center  rounded-md text-white font-medium `}
        >
          Connect to your Wallet
        </Button>

        <Button className="text-white" onClick={web3Actions.connectWallet}>
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Home;
