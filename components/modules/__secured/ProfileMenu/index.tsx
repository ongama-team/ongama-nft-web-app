/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CrossVector, VUser } from "@components/modules/__modules__/_vectors";
import WalletInfoCard from "@components/modules/__modules__/Card/WalletInfoCard";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  currentAccountState,
  profileMenuAtom,
  walletAddressAtom,
} from "@lib/atoms";
import truncateAddress from "@lib/helper/truncateAddress";
import { useRouter } from "next/router";
import UserAvatarCard from "@components/modules/__modules__/Card/UserAvatarCard";
import { UserAccount } from "@lib/models/UserAccount";
import { web3Actions } from "@lib/web3";

const ProfileMenu = () => {
  const currentAccount = useRecoilValue(currentAccountState);
  const { address, balance } = useRecoilValue(walletAddressAtom);
  const [isProfileMenu, setIsProfileMenu] = useRecoilState(profileMenuAtom);
  const truncatedWalletAddress = truncateAddress(address, 10, 4);
  const router = useRouter();

  const closeProfileMenu = () => {
    setIsProfileMenu(!isProfileMenu);
  };

  const onRedirectToProfile = () => {
    router.push(`/profile/${address}`);
    setIsProfileMenu(!isProfileMenu);
  };

  const onRedirectToEditProfile = () => {
    router.push("/profile/edit");
    setIsProfileMenu(!isProfileMenu);
  };

  const onLogout = async () => {
    await web3Actions.disconnectBrowserWallet();
  };

  return (
    <div
      className={`${
        !isProfileMenu
          ? "fixed mobile:translate-y-[200] md:translate-x-[200] transition-all backdrop-filter backdrop-blur-lg "
          : "fixed mobile:translate-y-full md:translate-x-full transition-all"
      } top-0 left-0 right-0 bottom-0 z-20 py-5 mobile:py-0 mobile:pt-32`}
    >
      <div className="flex flex-col relative h-full justify-between w-96 bg-white dark:bg-darkPrimary float-right mx-5 px-5 py-5 mobile:w-full mobile:rounded-t-2xl mobile:rounded-none mobile:mx-0 shadow-xl rounded-2xl border border-gray-50 dark:border-darkLight">
        <div>
          <button
            onClick={closeProfileMenu}
            className="rounded-full transition-all cursor-pointer p-2 float-right hover:bg-gray-300 mobile:bg-gray-300"
          >
            <CrossVector className="rotate-45 text-gray-500 dark:text-gray-400 dark:hover:text-darkPrimary w-6 h-6" />
          </button>
          <div className="flex items-center mt-10">
            <UserAvatarCard
              user={currentAccount as UserAccount}
              identiconSize={40}
              userAvatarClassName={"w-12 h-12 rounded-full object-cover"}
            />
            <div className="px-3">
              <p className="font-ibmPlexSans font-bold dark:text-white">
                {currentAccount?.username}
              </p>
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => null}
                onClick={onRedirectToProfile}
                className="text-gray-400 hover:text-gray-600 cursor-pointer transition-all font-ibmPlexSans"
              >
                View profile
              </div>
            </div>
          </div>
          <div className="my-5">
            <WalletInfoCard
              truncatedWalletAddress={truncatedWalletAddress}
              walletBalance={balance.toFixed(2) + " ETH"}
            />
          </div>
          <button
            onClick={onRedirectToEditProfile}
            className="flex items-center hover:bg-gray-100 dark:text-white dark:hover:text-darkPrimary dark:hover:bg-gray-300 dark:hover:bg-opacity-80 py-3 rounded-xl px-3 transition-all w-full"
          >
            <VUser className="text-2xl" />
            <span className="px-3 font-ibmPlexSans font-bold">
              Edit profile
            </span>
          </button>
        </div>
        <button
          onClick={onLogout}
          className="border rounded-xl py-3 hover:border-gray-400 font-bold transition-all"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
