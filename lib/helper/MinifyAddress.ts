class Minify {
  static minifiedAddress(address: string) {
    return `${address.slice(0, 6)}...${address.slice(address.length - 3)}`;
  }
}

export default Minify;
