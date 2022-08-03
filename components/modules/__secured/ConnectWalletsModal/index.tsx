import React, { FC } from "react";
import ConnectWalletsModal from "../../__modules__/model";

type openMenuT = {
  openWalletMenu: boolean;
};

const ConnectWallets: FC<openMenuT> = ({ openWalletMenu }) => {
  return <ConnectWalletsModal />;
};

export default ConnectWallets;
