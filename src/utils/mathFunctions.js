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

export const exponentiationForTenNumber = (a) => a ** 10;

const customMathAbs = (value) => {
  return value < 0 ? -value : value;
};

const square = (value, min, max) => {
  let mid = (min + max) / 2;
  let mul = mid * mid;
  if (mul === value || customMathAbs(mul - value) < 0.00001) {
    return mid;
  } else if (mul < value) {
    return square(value, mid, max);
  } else {
    return square(value, min, mid);
  }
};

export const calculateSquareRoot = (value) => {
  let i = 1;
  const condition = true;
  while (condition) {
    if (i * i === value) {
      return i;
    } else if (i * i > value) {
      return square(value, i - 1, i);
    }
    i++;
  }
};

export const calculateCubicRoot = (value) => {
  for (let i = 1; i <= value; i++) {
    if (i ** 3 === value) return i;
  }
};

export const calculateRoot = (value, n) => {
  for (let i = 1; i <= value; i++) {
    if (i ** n === value) return i;
  }
};

export const calculateFactorial = (n) => (n ? n * calculateFactorial(n - 1) : 1);
