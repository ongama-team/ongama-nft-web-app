import React from "react";
import Header from "../modules/_noAuth/Header";
import Presentation from "../modules/_noAuth/Presentation";
import TopCollection from "@components/modules/_noAuth/TopCollection";
import ConnectWalletBox from "@components/modules/_noAuth/ConnectWalletsBox";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Presentation />
      <TopCollection />
      <ConnectWalletBox />
    </>
  );
};

export default LandingPage;
