/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  VSun,
  MoonVector,
  VSearch,
  VMenu,
} from "@components/modules/__modules__/_vectors";
import Link from "next/link";
import Menu, { MenuList } from "./Menu";
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
import ShowWidget from "@components/modules/__modules__/ShowWidget";
import useClickOutside from "@components/hooks/useClickOutside";
import SwitchThemeButton from "./SwitchThemeButton";

const Header = () => {
  const routes = useRouter();
  const [isMenuModal, setIsMenuModal] = useState(false);
  const [isWalletsModalDisplayed, setIsWalletsModalDisplayed] =
    useRecoilState(walletAtom);
  const [currentAccount, setCurrentAccount] =
    useRecoilState(currentAccountState);
  const [walletData, setWalletData] = useRecoilState(walletAddressAtom);
  const [isProfileMenu, setIsProfileMenu] = useRecoilState(profileMenuAtom);
  const { address } = walletData;

  const closeMenuModal = () => {
    setIsMenuModal(false);
  };

  const outSideRef = useClickOutside(closeMenuModal);

  const toggleMenuModal = () => {
    setIsMenuModal(!isMenuModal);
  };

  const toggleWalletsModal = () => {
    setIsWalletsModalDisplayed(!isWalletsModalDisplayed);
  };

  const onRedirectToCreateNftPage = () => {
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
  }, [walletData]);

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
  }, []);

  const openProfileMenu = () => {
    setIsProfileMenu(!isProfileMenu);
  };

  return (
    <>
      <div className="flex justify-between items-center px-5 py-3 fixed top-0 left-0 right-0 backdrop-blur-lg z-20 dark:bg-darkPrimary dark:bg-opacity-80 transition-all">
        <div className="cursor-pointer">
          <Link href="/" passHref>
            <p className="flex items-center text-3xl font-ibmPlexSans">
              <span className="text-blue-500">O</span>
              <span className="mobile:hidden dark:text-white">ngama</span>
            </p>
          </Link>
        </div>
        <div className="flex justify-center w-full items-center">
          <SearchInputBar />
        </div>
        <div className="flex items-center">
          <button className="border dark:text-white border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full min-lg:block hidden">
            <VSearch className="w-6 h-6" />
          </button>
          <button
            onClick={onRedirectToCreateNftPage}
            className="border-none px-2 py-3 mx-1 w-20 font-bold rounded-full text-white transition-all duration-500 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:to-blue-600 font-ibmPlexSans min-md:hidden"
          >
            Create
          </button>
          <button
            onClick={toggleWalletsModal}
            className={`${address && "hidden"}
           border border-gray-300 transition-all duration-300 font-bold ease-in-out hover:border-gray-400 dark:text-white px-2 py-3 mx-1 w-20  rounded-full font-ibmPlexSans min-md:hidden`}
          >
            Sign in
          </button>
          <SwitchThemeButton />
          <ShowWidget
            condition={
              currentAccount?.walletAddress !== undefined ||
              walletData.address !== ""
            }
          >
            <button
              onClick={toggleMenuModal}
              className="border border-gray-300 transition-all dark:text-white duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full min-md:block "
            >
              <VMenu className="w-6 h-6" />
            </button>
          </ShowWidget>
          <div
            onClick={openProfileMenu}
            className={`${
              !address && "hidden"
            } w-12 h-12 ml-1 flex items-center`}
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
      <div
        className={`${
          isMenuModal
            ? "fixed translate-x-[200] transition-all"
            : "fixed translate-x-[3000px] transition-all"
        } top-16 mobile:top-20 left-0 right-5 bottom-0 z-20 py-5 mobile:py-0 ml-5`}
      >
        <div
          ref={outSideRef}
          className="flex flex-col relative h-fit justify-between w-96 mobile:w-full bg-white dark:bg-darkPrimary float-right ml-5 px-5 py-5 shadow-xl rounded-2xl border border-gray-200 dark:border-darkLight"
        >
          <MenuList
            walletAddress={
              LocalStorage.getItem("ongame_signer-address") ||
              currentAccount?.walletAddress ||
              walletData.address
            }
            className="flex flex-col gap-4 text-xl font-bold dark:text-white"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
