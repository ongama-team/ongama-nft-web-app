import { NFT } from "./models/GeneralModel";

export const removeEmpty = (obj: any) => {
  Object.keys(obj).forEach((k) => {
    if (obj[k] === undefined || obj[k] === "" || obj[k] === null) {
      // eslint-disable-next-line no-param-reassign
      delete obj[k];
    }
  });
  return obj;
};

export const orderObject = (object: any) => {
  const newObject = removeEmpty(object);
  // eslint-disable-next-line no-return-assign,no-param-reassign,no-sequences
  return Object.entries(newObject)
    .sort()
    .reduce((o: any, [k, v]) => ((o[k] = v), o), {});
};

const randomNumber = () => {
  return Math.random().toString(36).substr(2);
};

export const generateTokenUri = () => {
  const token = randomNumber() + randomNumber();

  return token;
};
