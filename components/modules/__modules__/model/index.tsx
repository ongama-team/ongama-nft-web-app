import React, { FC, useState } from "react";
import SelectedItem from "../../__auth/SelectedItem";
import {
  WalletConnectVector,
  TrustWalletVector,
  MetaMaskVector,
  CoinBaseVector,
} from "../../__modules__/_vectors/";
import { web3Actions } from "@lib/web3";

type openMenuT = {
  openWalletMenu: boolean;
};

const ConnectWalletsModal = () => {
  const [authMode, setAuthMode] = useState(false);
  const [startProcess, setStartProcess] = useState(false);

  const {
    connectTrustOrConnectWallet,
    connectCoinBaseWallet,
    connectBrowserWallet,
  } = web3Actions;

  const onAuthMode = () => {
    setAuthMode((prev) => !prev);
  };

  return (
    <div>
      <div className="text-center">
        <p className="text-xl mt-6 font-medium font-ibmPlexSans">
          Sign in with your Wallet
        </p>
      </div>

      <div className="grid grid-cols-2 gap-1 justify-center items-center ">
        <SelectedItem
          key={"coinBase"}
          processing={startProcess}
          authMode={authMode}
          onAuthMode={onAuthMode}
        >
          <div
            onClick={connectCoinBaseWallet}
            className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center"
          >
            <CoinBaseVector className="h-12 w-12" />
            <label className="font-ibmPlexSans font-thin">Coin Base</label>
          </div>
        </SelectedItem>
        <SelectedItem
          key={"MetaMask"}
          processing={startProcess}
          authMode={authMode}
          onAuthMode={onAuthMode}
        >
          <div
            onClick={connectBrowserWallet}
            className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center"
          >
            <MetaMaskVector className="h-12 w-12" />
            <label className="font-ibmPlexSans font-thin">MetaMask</label>
          </div>
        </SelectedItem>
        <SelectedItem
          key={"Trust Wallet"}
          processing={startProcess}
          authMode={authMode}
          onAuthMode={onAuthMode}
        >
          <div
            onClick={connectTrustOrConnectWallet}
            className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center"
          >
            <TrustWalletVector className="h-12 w-12" />
            <label className="font-ibmPlexSans font-thin">Trust Wallet</label>
          </div>
        </SelectedItem>
        <SelectedItem
          key={"Wallet Connect"}
          processing={startProcess}
          authMode={authMode}
          onAuthMode={onAuthMode}
        >
          <div
            onClick={connectTrustOrConnectWallet}
            className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center"
          >
            <div className=" flex justify-center self-center flex-col">
              <WalletConnectVector className="h-12 w-12 flex self-center" />
            </div>
            <label className="font-ibmPlexSans font-thin">Wallet Connect</label>
          </div>
        </SelectedItem>
      </div>
    </div>
  );
};

export default ConnectWalletsModal;
