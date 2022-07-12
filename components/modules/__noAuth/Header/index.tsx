/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  VSun,
  MoonVector,
  VSearch,
  VMenu,
} from "@components/modules/__modules__/_vectors";
import Link from "next/link";
import Menu from "./Menu";
import SearchInputBar from "./SearchInputBar";

import { useRecoilState } from "recoil";
import {
  walletAtom,
  profileMenuAtom,
  currentAccountState,
  walletAddressAtom,
} from "@lib/atoms";
import LocalStorage from "@lib/helper/LocalStorage";
import { useRouter } from "next/router";
import UserAvatarCard from "@components/modules/__modules__/Card/UserAvatarCard";
import { backendApiService } from "@lib/services/BackendApiService";
import { UserAccount } from "@lib/models/UserAccount";

const Header = () => {
  const routes = useRouter();
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isWalletsDisplayed, setIsWalletsDisplayed] =
    useRecoilState(walletAtom);
  const [currentAccount, setCurrentAccount] =
    useRecoilState(currentAccountState);
  const [walletData, setWalletData] = useRecoilState(walletAddressAtom);
  const [isProfileMenu, setIsProfileMenu] = useRecoilState(profileMenuAtom);
  const { address } = walletData;
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const toggleWallets = () => {
    setIsWalletsDisplayed(!isWalletsDisplayed);
  };

  const onCreateNft = () => {
    routes.push("/create");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchUser = async (walletAddress: string) => {
    const user = await backendApiService.findAccountWhereAddressOrUsername(
      walletAddress
    );
    return setCurrentAccount(user);
  };

  useEffect(() => {
    if (window && !window?.ethereum) return;
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      if (!accounts.length) {
        LocalStorage.removeItem("ongama_signer_address");
        setWalletData({ ...walletData, address: "" });
      }
    });
  }, [setWalletData, walletData]);

  useEffect(() => {
    (async () => {
      const signer = LocalStorage.getItem("ongama_signer_address");
      if (signer) {
        setWalletData({
          balance: 0,
          address: signer || "",
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps

        fetchUser(signer);
      }
    })();
  }, [fetchUser, setWalletData]);

  const openProfileMenu = () => {
    setIsProfileMenu(!isProfileMenu);
  };

  return (
    <div className="flex justify-between items-center px-5 py-3 fixed top-0 left-0 right-0 backdrop-blur-lg z-20">
      <div className="cursor-pointer">
        <Link href="/" passHref>
          <p className="flex items-center text-3xl font-ibmPlexSans">
            <span className="text-blue-500">O</span>{" "}
            <span className="mobile:hidden">ngama</span>
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-2 min-lg:flex min-lg:justify-start justify-center items-center w-full">
        <SearchInputBar />
        <Menu />
      </div>
      <div className="flex items-center">
        <button className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full min-lg:block hidden">
          <VSearch className="w-6 h-6" />
        </button>
        <button
          onClick={onCreateNft}
          className="border-none px-2 py-3 mx-1 w-20 font-bold rounded-full text-white transition-all duration-500 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:to-blue-600 font-ibmPlexSans min-md:hidden"
        >
          Create
        </button>
        <button
          onClick={toggleWallets}
          className={`${address && "hidden"}
           border border-gray-300 transition-all duration-300 font-bold ease-in-out hover:border-gray-400 px-2 py-3 mx-1 w-20  rounded-full font-ibmPlexSans min-md:hidden`}
        >
          Sign in
        </button>
        <button
          className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full"
          onClick={toggleTheme}
        >
          {isLightTheme ? (
            <MoonVector className="w-5 h-5" />
          ) : (
            <VSun className="w-5 h-5" />
          )}
        </button>
        <button className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full min-md:block hidden">
          <VMenu className="w-6 h-6" />
        </button>
        <div
          onClick={openProfileMenu}
          className={`${!address && "hidden"} w-12 h-12 ml-1 flex items-center`}
        >
          <UserAvatarCard
            user={currentAccount as UserAccount}
            identiconSize={40}
            onUserAvatarClicked={() => null}
            userAvatarClassName={
              "w-12 h-12 object-cover rounded-full cursor-pointer"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
