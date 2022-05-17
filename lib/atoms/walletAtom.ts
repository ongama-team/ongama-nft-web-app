import { atom } from "recoil";

const walletAtom = atom({
  key: "displayWalletState",
  default: true,
});

export default walletAtom;
