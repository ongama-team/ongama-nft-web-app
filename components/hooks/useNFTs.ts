import React, { useRef, useState } from "react";
import { backendApiService } from "@lib/services/BackendApiService";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { nftsState } from "@lib/atoms";
import useMediaQuery from "@components/hooks/useMediaQuery";

const useNfTs = () => {
  const [loading, setLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const [currentNfts, setCurrentNfts] = useRecoilState(nftsState);
  const page = useRef(1);
  const [isMobile] = useMediaQuery("(max-width: 520px)");

  const shouldShowLoadMoreButton =
    !loading &&
    !currentNfts.isLoading &&
    showLoadMore &&
    currentNfts.nfts &&
    currentNfts.nfts.length > 0;

  const onLoadMore = async () => {
    setCurrentNfts((state) => ({
      ...state,
      isLoading: true,
    }));

    page.current += 1;

    const loadNftData = await backendApiService.findNFts();

    if (loadNftData.nfts) {
      setCurrentNfts({
        nfts: loadNftData.nfts,
        metadata: loadNftData.meta,
        isLoading: false,
      });
    } else {
      setCurrentNfts((state) => ({
        ...state,
        isLoading: false,
      }));
    }

    setCurrentNfts((state) => ({
      ...state,
      isLoading: false,
    }));
  };

  return { shouldShowLoadMoreButton, onLoadMore };
};

export default useNfTs;
