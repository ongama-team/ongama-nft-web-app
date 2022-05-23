import { atom } from "recoil";

const walletAtom = atom({
  key: "displayWallet",
  default: true,
});

export default walletAtom;
