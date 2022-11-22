import { addFunc, subtractFunc } from '../../../utils/mathFunctions';
import { validatorErr } from '../../../utils/validator';
import { DEFAULT_INPUT_VALUE } from '../../../utils/variables';

export class addValueInMemoryCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    const value = addFunc(state.memory, this.value);
    if (validatorErr) {
      state.memory = value;
    }
    return state;
  }
}

export class SubtractValueFromMemoryCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    const value = subtractFunc(state.memory, this.value);
    if (validatorErr) {
      state.memory = value;
    }
    return state;
  }
}

export class ClearMemoryCommand {
  execute(state) {
    state.memory = DEFAULT_INPUT_VALUE;
    return state;
  }
}

export class DownloadMemoryValueCommand {
  execute(state) {
    if (!state.mathValue) {
      state.left = state.memory;
    } else {
      state.right = state.memory;
    }
    return state;
  }
}
