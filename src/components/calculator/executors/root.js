import { calculateCubeRoot, calculateRoot, calculateSquareRoot } from '../../../utils/mathFunctions';

export class DegreeRootCommand {
  constructor(value, degree) {
    this.value = value;
    this.degree = degree;
  }

  execute(state) {
    state.value = calculateRoot(this.value, this.degree);
    return state;
  }
}

export class SquareRootCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = calculateSquareRoot(this.value);
    return state;
  }
}

export class CubeRootCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.value = calculateCubeRoot(this.value);
    return state;
  }
}
