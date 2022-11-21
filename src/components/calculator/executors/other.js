import { DEFAULT_INPUT_VALUE } from '../../../utils/variables';

export class ResetCommand {
  execute(state) {
    state.left = String(DEFAULT_INPUT_VALUE);
    state.right = '';
    state.mathValue = '';
    state.value = DEFAULT_INPUT_VALUE;
    state.isSuccessOperation = false;
    state.isFirstInput = true;
    return state;
  }
}
