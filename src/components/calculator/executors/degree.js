import { cubingFunc, exponentiationForTenNumber, exponentiationFunc, squaringFunc } from '../../../utils/mathFunctions';

export class DegreeCommand {
  execute(state) {
    state.value = exponentiationFunc(+state.left, +state.right);
    return state;
  }
}

export class SquareCommand {
  execute(state) {
    state.value = squaringFunc(+state.left);
    return state;
  }
}

export class CubeCommand {
  execute(state) {
    state.value = cubingFunc(+state.left);
    return state;
  }
}

export class TenDegreeCommand {
  execute(state) {
    state.value = exponentiationForTenNumber(+state.left);
    return state;
  }
}
