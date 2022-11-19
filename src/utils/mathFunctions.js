import { ERROR } from './variables';

export const addFunc = (a, b) => a + b;

export const subtractFunc = (a, b) => a - b;

export const multiplyFunc = (a, b) => a * b;

export const divideFunc = (a, b) => a / b;

export const calculatePercent = (a, b) => (a / 100) * b;

export const changeSign = (value) => -value;

export const squaringFunc = (value) => value ** 2;

export const cubingFunc = (value) => value ** 3;

export const exponentiationFunc = (a, b) => a ** b;

export const divisionByNumber = (value) => 1 / value;

export const exponentiationForTenNumber = (n) => 10 ** n;

const customMathAbs = (value) => (value < 0 ? -value : value);

export const calculateSquareRoot = (value) => customMathAbs(value) ** (1 / 2);

export const calculateCubeRoot = (value) => customMathAbs(value) ** (1 / 3);

export const calculateRoot = (value, n) => customMathAbs(value) ** (1 / n);

export const calculateFactorial = (n) => {
  try {
    const result = n ? n * calculateFactorial(n - 1) : 1;
    return result ? result : ERROR;
  } catch (e) {
    console.error(e.message);
  }
};
