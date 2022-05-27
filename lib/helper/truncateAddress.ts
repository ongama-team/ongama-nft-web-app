const truncateAddress = (
  address: string,
  startingCharacters = 6,
  endingCharacters = 3
): string => {
  return `${address.slice(0, startingCharacters)}...${address.slice(
    address.length - endingCharacters
  )}`;
};

export default truncateAddress;
