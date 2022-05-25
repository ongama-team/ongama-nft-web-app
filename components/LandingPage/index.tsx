import React from "react";
import Header from "../modules/__noAuth/Header";
import Presentation from "../modules/__noAuth/Presentation";
import TopCollection from "@components/modules/__noAuth/TopCollection";
import ConnectWalletBox from "@components/modules/__noAuth/ConnectWalletsBox";
import HotBids from "@components/modules/__noAuth/HotBids";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Presentation />
      <TopCollection />
      <ConnectWalletBox />
      <HotBids />
    </>
  );
};

export default LandingPage;
