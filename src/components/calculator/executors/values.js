import { COMMA, DEFAULT_INPUT_VALUE } from '../../../utils/variables';

export class ValueCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    if (!state.mathValue) {
      if (state.isFirstInput && state.left === String(DEFAULT_INPUT_VALUE)) {
        state.left = this.value;
        state.isFirstInput = !state.isFirstInput;
      } else if (state.isFirstInput) {
        state.left = this.value;
        state.isFirstInput = !state.isFirstInput;
      } else {
        state.left += this.value;
      }
    } else {
      state.right += this.value;
    }
    return state;
  }
}

export class CommaCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    if (!state.mathValue) {
      if (state.left.includes(COMMA)) {
        return state;
      }
      if (state.isFirstInput) {
        state.isFirstInput = false;
        state.left = DEFAULT_INPUT_VALUE + this.value;
      } else {
        state.left += this.value;
      }
    } else {
      if (state.right.includes(COMMA)) {
        return state;
      }
      state.right += state.right ? this.value : DEFAULT_INPUT_VALUE + this.value;
    }
    return state;
  }
}

export class MathValueCommand {
  constructor(value) {
    this.value = value;
  }

  execute(state) {
    state.mathValue = this.value;
    return state;
  }
}
