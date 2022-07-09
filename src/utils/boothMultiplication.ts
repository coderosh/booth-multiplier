import { leftPad } from "./pad";
import {
  addition,
  arithmeticShiftRight,
  countBits,
  toBinary,
  twosComplement,
} from "./binary";

export interface Column {
  step: number;
  A: string;
  Q: string;
  Q1: string;
  M: string;
  minusM: string;
  count: number;
  remarks: string;
}

const boothMultiplication = (m: number, q: number) => {
  const count = Math.max(countBits(q), countBits(m));

  let tempCount = count;

  let Q = toBinary(q, count);
  let M = toBinary(m, count);
  let A = leftPad("0", count);
  let Q1 = "0";
  const minusM = twosComplement(M, count);

  const table: Column[] = [
    {
      step: 0,
      A,
      Q,
      Q1,
      M,
      minusM,
      count,
      remarks: "Initialization",
    },
  ];

  let step = 1;

  while (tempCount > 0) {
    // get q0 and q-1
    let q01 = Q[Q.length - 1] + Q1;

    if (q01 === "01") {
      A = addition(A, M, count);
      table.push({
        step: step,
        A,
        Q,
        Q1,
        M,
        minusM,
        count: tempCount,
        remarks: "A = A + M",
      });
    }

    if (q01 === "10") {
      A = addition(A, minusM, count);
      table.push({
        step,
        A,
        Q,
        Q1,
        M,
        minusM,
        count: tempCount,
        remarks: "A = A - M",
      });
    }

    const newStr = arithmeticShiftRight(A + Q + Q1);
    Q1 = newStr[newStr.length - 1];
    A = newStr.slice(0, count);
    Q = newStr.slice(count, count * 2);

    tempCount--;
    table.push({
      step,
      A,
      Q,
      Q1,
      M,
      minusM,
      count: tempCount,
      remarks: "Arithmetic Shift Right",
    });

    step++;
  }

  return table;
};

export default boothMultiplication;
