import React, { useState } from "react";
import { Button } from "antd";
import { CrossVector } from "@components/modules/__modules__/_vectors";
import ConnectWallets from "@components/modules/__secured";
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
      className={`${
        isWalletConnect && "hidden"
      } z-10 h-full flex flex-col justify-center bg-white bg-opacity-40 items-center fixed top-0 left-0 right-0 bottom-0 backdrop-filter backdrop-blur-lg`}
    >
      <div className="relative bottom-2 rounded-lg shadow-lg transition-all duration-300 ">
        <div className="absolute -top-5 -right-10 flex place-content-end mobile:-top-10 mobile:-right-0">
          <Button onClick={closeWalletConnect} className="rounded-full p-2 ">
            <CrossVector className="h-4 w-4" />
          </Button>
        </div>
        <div className="bg-white pt-1 rounded-xl transform transition-all">
          <ConnectWallets openWalletMenu />
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletBox;
