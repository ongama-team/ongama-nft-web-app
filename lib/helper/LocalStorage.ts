class LocalStorage {
  static getAccountAddress(key: string) {
    return localStorage.getItem(key);
  }

  static setAccountAddress(key: string, address: string) {
    localStorage.setItem(key, address);
  }
}

export default LocalStorage;
