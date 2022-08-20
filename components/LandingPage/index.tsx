import React, { useEffect } from "react";
import Header from "../modules/__noAuth/Header";
import Presentation from "../modules/__noAuth/Presentation";
import TopCollection from "@components/modules/__noAuth/TopCollection";
import TopSellers from "@components/modules/__noAuth/TopSellers";
import HotCollections from "@components/modules/__noAuth/HotCollections";
import ProfileMenu from "@components/modules/__secured/ProfileMenu";
import TrendingNFTs from "@components/modules/__noAuth/TrendingNFTs";
import LiveAuctions from "../modules/__noAuth/LiveAuctions";
import HotBids from "@components/modules/__noAuth/HotBids";
import { useRecoilState } from "recoil";
import { nftsState } from "@lib/atoms";
import { backendApiService } from "@lib/services/BackendApiService";
import ExploreNFTs from "@components/modules/__noAuth/ExploreNFTs";
import ConnectWalletsModal from "@components/modules/__noAuth/ConnectWalletsModal";

const LandingPage = () => {
  const [nfts, setNfts] = useRecoilState(nftsState);

  useEffect(() => {
    (async () => {
      setNfts({ ...nfts, isLoading: true });
      const response = await backendApiService.findNFts();

      setNfts({
        nfts: response.nfts,
        metadata: response.meta,
        isLoading: false,
      });
    })();
  }, []);

  return (
    <>
      <Header />
      {/* <Presentation /> */}
      {/* <TopCollection /> */}
      <TopSellers />
      <HotCollections />
      {/* <HotBids /> */}
      {/* <LiveAuctions /> */}
      <ProfileMenu />
      <ConnectWalletsModal />
      {/* <TrendingNFTs /> */}
      <ExploreNFTs />
    </>
  );
};

/* -------------- commented components are temporarily unavailable  ------------------- */

export default LandingPage;
