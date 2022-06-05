/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import dummy_profile from "@components/DropPage/AvatarAndCover/dummy_profile";
import { CrossVector, VUser } from "@components/modules/__modules__/_vectors";
import WalletInfoCard from "@components/modules/__modules__/Card/WalletInfoCard";
import { useRecoilValue, useRecoilState } from "recoil";
import { profileMenuAtom, walletAddressAtom } from "@lib/atoms";
import truncateAddress from "@lib/helper/truncateAddress";
import { useRouter } from "next/router";

const ProfileMenu = () => {
  const { name, profileImage } = dummy_profile;
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

  return (
    <div
      className={`${
        !isProfileMenu
          ? "fixed mobile:translate-y-[200] md:translate-x-[200] transition-all backdrop-filter backdrop-blur-lg "
          : "fixed mobile:translate-y-full md:translate-x-full transition-all"
      } top-0 left-0 right-0 bottom-0 z-20 py-5 mobile:py-0 mobile:pt-32`}
    >
      <div className="flex flex-col relative h-full justify-between w-96 bg-white float-right mx-5 px-5 py-5 mobile:w-full mobile:rounded-t-2xl mobile:rounded-none mobile:mx-0 shadow-xl rounded-2xl border border-gray-50">
        <div>
          <button
            onClick={closeProfileMenu}
            className="rounded-full transition-all cursor-pointer p-2 float-right hover:bg-gray-300 mobile:bg-gray-300"
          >
            <CrossVector className="rotate-45 text-gray-500 w-6 h-6" />
          </button>
          <div className="flex items-center mt-10">
            <img
              src={profileImage}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="px-3">
              <p className="font-ibmPlexSans font-bold">{name}</p>
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
              walletBalance={balance + "ETH"}
            />
          </div>
          <button className="flex items-center hover:bg-gray-100 py-3 rounded-xl px-3 transition-all w-full">
            <VUser className="text-2xl" />
            <span className="px-3 font-ibmPlexSans font-bold">
              Edit profile
            </span>
          </button>
        </div>
        <button className="border border-gray-400 hover:border-gray-500 transition-all py-3 rounded-full font-ibmPlexSans font-bold">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
