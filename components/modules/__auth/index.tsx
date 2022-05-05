import React, { FC, useState } from "react";
import ConnectWalletsModal from "../__modules__/model";
import {
  WalletConnectVector,
  TrustWalletVector,
  MetaMaskVector,
  CoinBaseVector,
} from "../__modules__/_vectors/";
import SelectedItem from "./SelectedItem";

type openMenuT = {
  openWalletMenu: boolean;
};

const ConnectWallets: FC<openMenuT> = ({ openWalletMenu }) => {
  return (
    <div>
      <ConnectWalletsModal />
    </div>
  );
};

export default ConnectWallets;
