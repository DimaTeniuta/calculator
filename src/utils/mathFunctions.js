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

export const calculateSquareRoot = (value) => {
  for (let i = 1; i <= value; i++) {
    if (i * i === value) return i;
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
