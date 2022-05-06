import React, { FC, useState } from "react";
import SelectedItem from "../../__auth/SelectedItem";
import {
  WalletConnectVector,
  TrustWalletVector,
  MetaMaskVector,
  CoinBaseVector,
} from "../../__modules__/_vectors/";

type openMenuT = {
  openWalletMenu: boolean;
};

const ConnectWalletsModal = () => {
  const [editMode, setEditMode] = useState(false);
  const [startProcess, setStartProcess] = useState(false);

  const onEditMode = () => {
    setEditMode((prev) => !prev);
  };
  return (
    <div>
      <div className="text-center">
        <p className="text-xl mt-6 font-medium">Choose Your Wallet</p>
      </div>

      <div className="grid grid-cols-2 gap-1 justify-center items-center ">
        <SelectedItem
          key={"coinBase"}
          processing={startProcess}
          editMode={editMode}
          onEditMode={onEditMode}
        >
          <div className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center">
            <CoinBaseVector className="h-12 w-12" />
            <label className="font-medium">Coin Base</label>
          </div>
        </SelectedItem>
        <SelectedItem
          key={"MetaMask"}
          processing={startProcess}
          editMode={editMode}
          onEditMode={onEditMode}
        >
          <div className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center">
            <MetaMaskVector className="h-12 w-12" />
            <label className="font-medium">MetaMask</label>
          </div>
        </SelectedItem>
        <SelectedItem
          key={"Trust Wallet"}
          processing={startProcess}
          editMode={editMode}
          onEditMode={onEditMode}
        >
          <div className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center">
            <TrustWalletVector className="h-12 w-12" />
            <label className="font-medium">Trust Wallet</label>
          </div>
        </SelectedItem>
        <SelectedItem
          key={"Wallet Connect"}
          processing={startProcess}
          editMode={editMode}
          onEditMode={onEditMode}
        >
          <div className="flex space-y-3 hover:bg-gray-200 p-4 rounded-lg justify-center flex-col items-center">
            <div className=" flex justify-center self-center flex-col">
              <WalletConnectVector className="h-12 w-12 flex self-center" />
            </div>
            <label className="font-medium">Wallet Connect</label>
          </div>
        </SelectedItem>
      </div>
    </div>
  );
};

export default ConnectWalletsModal;
