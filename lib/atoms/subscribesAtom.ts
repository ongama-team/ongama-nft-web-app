import { atom } from "recoil";

const subscribesAtom = atom({
  key: "displaySubScribesState",
  default: true,
});

export default subscribesAtom;
