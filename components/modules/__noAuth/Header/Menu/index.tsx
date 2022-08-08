/* eslint-disable @next/next/link-passhref */
import { walletAddressAtom, walletAtom } from "@lib/atoms";
import Link from "next/link";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface IMenuListProps {
  walletAddress: string | null;
  className: string;
}

export const MenuList = ({ walletAddress, className }: IMenuListProps) => {
  const [isWalletsDisplayed, setIsWalletsDisplayed] =
    useRecoilState(walletAtom);

  const onDisplayWallets = () => {
    setIsWalletsDisplayed(!isWalletsDisplayed);
  };

  return (
    <ul className={className}>
      <Link href={`/profile/${walletAddress}`}>
        <li className="min-lg:px-3 hover:text-black text-gray-500 hover:bg-gray-100 py-2 pl-2 rounded-md dark:text-gray-300 dark:hover:text-black transition-all cursor-pointer">
          My Profile
        </li>
      </Link>
      <li className="min-lg:px-3 hover:text-black text-gray-500 hover:bg-gray-100 py-2 pl-2 rounded-md dark:text-gray-300 dark:hover:text-black transition-all cursor-pointer">
        Activity
      </li>
      {!walletAddress && (
        <li
          role="button"
          onKeyDown={() => null}
          onClick={onDisplayWallets}
          className="hidden  min-md:block min-lg:px-3 hover:text-black text-gray-500 hover:bg-gray-100 py-2 pl-2 rounded-md dark:text-gray-300 dark:hover:text-black transition-all cursor-pointer"
        >
          Sign in
        </li>
      )}
      <Link href={"/create"}>
        <li className="min-lg:px-3 hover:text-black text-gray-500 hover:bg-gray-100 py-2 pl-2 rounded-md dark:text-gray-300 dark:hover:text-black transition-all cursor-pointer">
          Create
        </li>
      </Link>
    </ul>
  );
};

const Menu = () => {
  const walletAddress = useRecoilValue(walletAddressAtom);

  return (
    <div className="min-md:hidden block">
      <MenuList
        walletAddress={walletAddress.address}
        className="flex justify-between font-ibmPlexSans font-bold mr-2 min-lg:mx-5 items-center text-gray-400"
      />
    </div>
  );
};

export default Menu;
