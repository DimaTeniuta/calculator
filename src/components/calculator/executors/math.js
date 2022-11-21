import {
  addFunc,
  calculateFactorial,
  calculatePercent,
  changeSign,
  divideFunc,
  divisionByNumber,
  multiplyFunc,
  subtractFunc,
} from '../../../utils/mathFunctions';
import { commaValidator } from '../../../utils/validator';

export class MathCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.left = commaValidator(state.left);
    state.mathValue = this.value;
    return state;
  }
}

export class SignCommand {
  execute(state) {
    if (state.right) {
      state.value = changeSign(+state.right);
      state.right = state.value;
    } else {
      state.value = changeSign(+state.left);
      state.left = state.value;
    }
    return state;
  }
}

export class AddCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = addFunc(+state.left, this.value);
    return state;
  }
}

export class SubtractCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = subtractFunc(+state.left, this.value);
    return state;
  }
}

export class MultiplyCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = multiplyFunc(+state.left, this.value);
    return state;
  }
}

export class DivideCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = divideFunc(+state.left, this.value);
    return state;
  }
}

export class DivisionByXCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = divisionByNumber(this.value);
    return state;
  }
}

export class PercentCommand {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  execute(state) {
    state.value = calculatePercent(this.left, this.right);
    state.right = state.value;
    state.value = state.left;
    return state;
  }
}

export class FactorialCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = calculateFactorial(this.value);
    return state;
  }
}
