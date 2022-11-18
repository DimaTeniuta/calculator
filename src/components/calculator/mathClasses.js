import {
  addFunc,
  calculateCubeRoot,
  calculatePercent,
  calculateSquareRoot,
  changeSign,
  cubingFunc,
  divideFunc,
  exponentiationFunc,
  multiplyFunc,
  squaringFunc,
  subtractFunc,
} from '../../utils/mathFunctions';

export class AddCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return addFunc(currentValue, this.value);
  }
}

export class SubtractCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return subtractFunc(currentValue, this.value);
  }
}

export class MultiplyCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return multiplyFunc(currentValue, this.value);
  }
}

export class DivideCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return divideFunc(currentValue, this.value);
  }
}

export class SignCommand {
  constructor(value) {
    this.value = value;
  }

  execute() {
    return changeSign(this.value);
  }
}

export class PercentCommand {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  execute() {
    return calculatePercent(this.left, this.right);
  }
}

export class SquareCommand {
  constructor(value) {
    this.value = value;
  }

  execute() {
    return squaringFunc(this.value);
  }
}

export class CubeCommand {
  constructor(value) {
    this.value = value;
  }

  execute() {
    return cubingFunc(this.value);
  }
}

export class DegreeCommand {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  execute() {
    return exponentiationFunc(this.left, this.right);
  }
}

export class SquareRootCommand {
  constructor(value) {
    this.value = value;
  }

  execute() {
    return calculateSquareRoot(this.value);
  }
}

export class CubeRootCommand {
  constructor(value) {
    this.value = value;
  }

  execute() {
    return calculateCubeRoot(this.value);
  }
}
