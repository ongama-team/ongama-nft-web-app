import walletAtom from "./walletAtom";
import subscribesAtom from "./subscribesAtom";
import walletAddressAtom from "./walletAddressAtom";
import { atom } from "recoil";

const profileMenuAtom = atom({
  key: "profileMenu",
  default: true,
});

const shareProfileLinkAtom = atom({
  key: "shareProfileLinkAtom",
  default: false,
});

export {
  walletAtom,
  walletAddressAtom,
  subscribesAtom,
  profileMenuAtom,
  shareProfileLinkAtom,
};
