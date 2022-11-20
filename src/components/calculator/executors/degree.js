import { cubingFunc, exponentiationForTenNumber, exponentiationFunc, squaringFunc } from '../../../utils/mathFunctions';

export class DegreeCommand {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  execute(state) {
    state.value = exponentiationFunc(this.left, this.right);
    return state;
  }
}

export class SquareCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = squaringFunc(this.value);
    return state;
  }
}

export class CubeCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = cubingFunc(this.value);
    return state;
  }
}

export class TenDegreeCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = exponentiationForTenNumber(this.value);
    return state;
  }
}
