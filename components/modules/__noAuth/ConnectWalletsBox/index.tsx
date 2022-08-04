import React, { useState } from "react";
import { Button } from "antd";
import { CrossVector } from "@components/modules/__modules__/_vectors";
import ConnectWallets from "@components/modules/__secured/ConnectWalletsModal";
import { useRecoilValue, useRecoilState } from "recoil";
import { walletAtom } from "@lib/atoms";

const ConnectWalletBox = () => {
  const isWalletConnect = useRecoilValue(walletAtom);
  const [isWalletsDisplayed, setIsWalletsDisplayed] =
    useRecoilState(walletAtom);

  const closeWalletConnect = () => {
    setIsWalletsDisplayed(!isWalletsDisplayed);
  };

  return (
    <div
      onClick={closeWalletConnect}
      className={`${
        isWalletConnect && "hidden"
      } z-30 h-full flex flex-col justify-center bg-white dark:bg-darkPrimary/30 bg-opacity-40 items-center fixed top-0 left-0 right-0 bottom-0 backdrop-filter backdrop-blur-lg`}
    >
      <div className="relative rounded-lg shadow-lg transition-all duration-300 mobile:absolute mobile:bottom-0 mobile:w-full">
        <div className="absolute -top-5 -right-10 flex place-content-end mobile:-top-10 mobile:-right-0 mobile:hidden">
          <Button
            onClick={closeWalletConnect}
            className="rounded-full p-2 dark:bg-gray-300"
          >
            <CrossVector className="h-4 w-4 rotate-45" />
          </Button>
        </div>
        <div className="bg-white dark:text-white dark:bg-darkPrimary border dark:border-darkLight pt-1 rounded-xl mobile:rounded-b-none transform transition-all">
          <ConnectWallets openWalletMenu />
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletBox;
