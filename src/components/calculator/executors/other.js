import { DEFAULT_INPUT_VALUE, ERROR } from '../../../utils/variables';

export class CancelCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.right = '';
    state.mathValue = '';
    state.left = state.historyValue;
    return state;
  }
}

export class ResetCommand {
  execute(state) {
    state.historyValue = state.left !== ERROR ? state.left : String(DEFAULT_INPUT_VALUE);
    state.left = String(DEFAULT_INPUT_VALUE);
    state.right = '';
    state.mathValue = '';
    state.value = DEFAULT_INPUT_VALUE;
    state.isSuccessOperation = false;
    state.isFirstInput = true;
    return state;
  }
}
