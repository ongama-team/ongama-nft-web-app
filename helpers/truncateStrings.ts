export const truncateStrings = (str: string, maxLength: number) => {
  if (!str) return "";
  if (str.length > maxLength) {
    return str.length > maxLength ? `${str.substr(0, maxLength - 1)}...` : str;
  }
};

export const middleEllipsis = (str: string, len: number) => {
  if (!str) return "";
  return `${str.substr(0, len)}...${str.substr(str.length - len, str.length)}`;
};
