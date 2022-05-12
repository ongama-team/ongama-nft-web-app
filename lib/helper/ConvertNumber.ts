const M_NUMBER_UNIT = 1000000;
const K_NUMBER_UNIT = 1000;

class ConvertNumber {
  static convert(value: number) {
    if (value >= M_NUMBER_UNIT) {
      const convertedNumber = value / M_NUMBER_UNIT + "M";
      return convertedNumber;
    }
    if (value >= K_NUMBER_UNIT) {
      const convertedNumber = value / K_NUMBER_UNIT + "K";
      return convertedNumber;
    }
  }
}

export default ConvertNumber;
