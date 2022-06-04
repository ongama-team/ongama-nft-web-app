import { atom } from "recoil";

const walletAddressAtom = atom({
  key: "walletAddress",
  default: {
    address: "",
    balance: "",
  },
});

export default walletAddressAtom;
