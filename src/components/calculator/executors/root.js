import { calculateCubeRoot, calculateRoot, calculateSquareRoot } from '../../../utils/mathFunctions';

export class DegreeRootCommand {
  constructor() {
    this.cube = 3;
  }

  execute(state) {
    if (+state.right === this.cube) {
      state.value = calculateCubeRoot(+state.left);
      return state;
    }
    console.log(222);
    state.value = calculateRoot(+state.left, +state.right);
    return state;
  }
}

export class SquareRootCommand {
  execute(state) {
    state.value = calculateSquareRoot(+state.left);
    return state;
  }
}

export class CubeRootCommand {
  execute(state) {
    state.value = calculateCubeRoot(+state.left);
    return state;
  }
}
