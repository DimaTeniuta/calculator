import {
  addFunc,
  calculatePercent,
  changeSign,
  divideFunc,
  multiplyFunc,
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
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    console.log(currentValue, this.value);
    return calculatePercent(currentValue, this.value);
  }
}
