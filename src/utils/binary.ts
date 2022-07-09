import { leftPad } from "./pad";

const countBits = (num: number) => {
  return Math.ceil(Math.log2(Math.abs(num))) + 1;
};

const onesComplement = (binaryStr: string) =>
  binaryStr
    .split("")
    .map((item) => (item === "0" ? "1" : "0"))
    .join("");

const twosComplement = (binaryStr: string, count: number) => {
  binaryStr = leftPad(binaryStr, count);
  const decimal = parseInt(onesComplement(binaryStr), 2) + 1;

  return leftPad(decimal.toString(2), count);
};

const toBinary = (num: number, count: number) => {
  let binary = num.toString(2);

  if (num < 0) return twosComplement(binary.substring(1), count);

  return leftPad(binary, count);
};

const arithmeticShiftRight = (binaryString: string) => {
  let newStr = (binaryString[0] + binaryString).slice(0, -1);

  return newStr;
};

const addition = (binaryNum1: string, binaryNum2: string, count: number) => {
  const sum = parseInt(binaryNum1, 2) + parseInt(binaryNum2, 2);
  const binary = toBinary(sum, count);
  return binary.substring(binary.length - count);
};

export { toBinary, twosComplement, countBits, arithmeticShiftRight, addition };
