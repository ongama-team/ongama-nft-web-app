const minifyAddress = (
  address: string,
  startingCharacters: number,
  endingCharacters: number
): string => {
  return `${address.slice(0, startingCharacters)}...${address.slice(
    address.length - endingCharacters
  )}`;
};

export default minifyAddress;
