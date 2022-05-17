import { atom } from "recoil";

const walletAtom = atom({
  key: "displayWalletState",
  default: false,
});

export default walletAtom;
