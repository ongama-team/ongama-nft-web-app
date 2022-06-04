import React from "react";
import Header from "../modules/__noAuth/Header";
import Presentation from "../modules/__noAuth/Presentation";
import TopCollection from "@components/modules/__noAuth/TopCollection";
import ConnectWalletBox from "@components/modules/__noAuth/ConnectWalletsBox";
import TopSellers from "@components/modules/__noAuth/TopSellers";
import HotCollections from "@components/modules/__noAuth/HotCollections";
import ProfileMenu from "@components/modules/__secured/ProfileMenu";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Presentation />
      <TopCollection />
      <ConnectWalletBox />
      <TopSellers />
      <HotCollections />
      <ProfileMenu />
    </>
  );
};

export default LandingPage;
