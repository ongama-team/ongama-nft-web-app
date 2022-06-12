import { atom } from "recoil";
import { UserAccount } from "@lib/models/UserAccount";

export const currentAccountState = atom<UserAccount | null>({
  key: "currentAccountState",
  default: null,
});

export const walletAddressAtom = atom({
  key: "walletAddress",
  default: {
    address: "",
    balance: "",
  },
});

export const profileMenuAtom = atom({
  key: "profileMenu",
  default: true,
});

export const shareProfileLinkAtom = atom({
  key: "shareProfileLinkAtom",
  default: true,
});

export const subscribesAtom = atom({
  key: "displaySubScribesState",
  default: true,
});

export const walletAtom = atom({
  key: "displayWallet",
  default: true,
});
