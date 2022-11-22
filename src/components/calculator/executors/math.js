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
  execute(state) {
    state.value = addFunc(+state.left, +state.right);
    return state;
  }
}

export class SubtractCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = subtractFunc(+state.left, +state.right);
    return state;
  }
}

export class MultiplyCommand {
  execute(state) {
    state.value = multiplyFunc(+state.left, +state.right);
    return state;
  }
}

export class DivideCommand {
  execute(state) {
    state.value = divideFunc(+state.left, +state.right);
    return state;
  }
}

export class DivisionByXCommand {
  execute(state) {
    state.value = divisionByNumber(+state.left);
    return state;
  }
}

export class PercentCommand {
  execute(state) {
    state.value = calculatePercent(+state.left, +state.right);
    state.right = state.value;
    state.value = state.left;
    return state;
  }
}

export class FactorialCommand {
  execute(state) {
    state.value = calculateFactorial(+state.left);
    return state;
  }
}
