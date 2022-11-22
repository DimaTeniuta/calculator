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
  execute(state) {
    state.value = calculateSquareRoot(+this.state.left);
    return state;
  }
}

export class CubeRootCommand {
  execute(state) {
    state.value = calculateCubeRoot(+state.left);
    return state;
  }
}
