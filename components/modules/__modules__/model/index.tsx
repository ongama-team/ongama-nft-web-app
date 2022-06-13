import React, { useState } from "react";
import SelectedItem from "../../__secured/SelectedItem";
import {
  WalletConnectVector,
  TrustWalletVector,
  MetaMaskVector,
  CoinBaseVector,
} from "../../__modules__/_vectors/";
import { web3Actions } from "@lib/web3";
import { walletAddressAtom, walletAtom } from "@lib/atoms";
import { useRecoilState } from "recoil";
import balanceFormater from "@lib/helper/walletBalanceFormater";

type openMenuT = {
  openWalletMenu: boolean;
};

const ConnectWalletsModal = () => {
  const [editMode, setEditMode] = useState(false);
  const [startProcess, setStartProcess] = useState(false);

  const [isWalletsDisplayed, setIsWalletsDisplayed] =
    useRecoilState(walletAtom);
  const [_, setWalletAddress] = useRecoilState(walletAddressAtom);

  const {
    connectTrustOrConnectWallet,
    connectCoinBaseWallet,
    connectBrowserWallet,
  } = web3Actions;

  const onEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const onConnectCoinBaseWallet = async () => {
    const signer = await connectCoinBaseWallet();
    if (!signer) return;
    setIsWalletsDisplayed(!isWalletsDisplayed);
    setWalletAddress({ address: signer, balance: "" });
    onEditMode();
  };

  // ------- get wallet balance from trust wallet throw an error after wallet
  // being connected.
  const onConnectTrustOrConnectWallet = async () => {
    const signer = await connectTrustOrConnectWallet();
    const signerWalletAddress = await signer?.getAddress();
    const signerWalletBalance = await signer?.getBalance();
    const formatedBalance = balanceFormater(signerWalletBalance);
    console.log("formated wallet data", signerWalletAddress, formatedBalance);
    if (!signer) return;
    setIsWalletsDisplayed(!isWalletsDisplayed);
    setWalletAddress({
      address: signerWalletAddress,
      balance: signerWalletBalance,
    });
    onEditMode();
  };

  //---- get wallet balance from metamask , works fine actually
  const onConnectBrowserWallet = async () => {
    const signer = await connectBrowserWallet();
    const signerWalletAddress = await signer?.getAddress();
    const signerWalletBalance = await signer?.getBalance();
    const formatedBalance = balanceFormater(signerWalletBalance);
    if (!signer) return;
    setIsWalletsDisplayed(!isWalletsDisplayed);
    setWalletAddress({
      balance: formatedBalance,
      address: signerWalletAddress,
    });
    onEditMode();
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
          editMode={editMode}
          onEditMode={onEditMode}
        >
          <div
            onClick={onConnectCoinBaseWallet}
            className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center"
          >
            <CoinBaseVector className="h-12 w-12" />
            <label className="font-ibmPlexSans font-thin">Coin Base</label>
          </div>
        </SelectedItem>
        <SelectedItem
          key={"MetaMask"}
          processing={startProcess}
          editMode={editMode}
          onEditMode={onEditMode}
        >
          <div
            onClick={onConnectBrowserWallet}
            className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center"
          >
            <MetaMaskVector className="h-12 w-12" />
            <label className="font-ibmPlexSans font-thin">MetaMask</label>
          </div>
        </SelectedItem>
        <SelectedItem
          key={"Trust Wallet"}
          processing={startProcess}
          editMode={editMode}
          onEditMode={onEditMode}
        >
          <div
            onClick={onConnectTrustOrConnectWallet}
            className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center"
          >
            <TrustWalletVector className="h-12 w-12" />
            <label className="font-ibmPlexSans font-thin">Trust Wallet</label>
          </div>
        </SelectedItem>
        <SelectedItem
          key={"Wallet Connect"}
          processing={startProcess}
          editMode={editMode}
          onEditMode={onEditMode}
        >
          <div
            onClick={onConnectTrustOrConnectWallet}
            className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center"
          >
            <div className="flex justify-center self-center flex-col">
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
