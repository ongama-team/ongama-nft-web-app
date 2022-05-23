import { atom } from "recoil";

const walletAddressAtom = atom({
  key: "walletAddress",
  default: "",
});

export default walletAddressAtom;
