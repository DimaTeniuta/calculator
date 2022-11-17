import { CONSTANTS_MATH_VALUE, DEFAULT_INPUT_VALUE } from '../../utils/variables';
import { AddCommand, DivideCommand, MultiplyCommand, SubtractCommand } from './mathClasses';

export default class Calculator {
  constructor() {
    this.left = String(DEFAULT_INPUT_VALUE);
    this.right = '';
    this.mathValue = '';
    this.value = DEFAULT_INPUT_VALUE;
    this.historyValue = '';
    this.isSuccessOperation = false;
    this.isFirstInput = true;
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.historyValue = this.value;
  }

  toggleIsFirstInput() {
    this.isFirstInput = !this.isFirstInput;
  }

  setValue(value) {
    if (!this.mathValue) {
      if (this.isFirstInput && this.left === String(DEFAULT_INPUT_VALUE)) {
        this.left = value;
        this.toggleIsFirstInput();
      } else if (this.isFirstInput) {
        this.left = value;
        this.toggleIsFirstInput();
      } else {
        this.left += value;
      }
    } else {
      this.right += value;
    }
  }

  setComma(value) {
    if (!this.mathValue) {
      if (this.isFirstInput) {
        this.isFirstInput = false;
        this.left = DEFAULT_INPUT_VALUE + value;
      } else {
        this.left += value;
      }
    } else {
      this.right += this.right ? value : DEFAULT_INPUT_VALUE + value;
    }
  }

  setMathValue(value) {
    this.mathValue = value;
  }

  saveValues() {
    this.historyValue = this.left;
    this.clear();
    this.left = this.value;
    this.value = DEFAULT_INPUT_VALUE;
    this.isSuccessOperation = true;
  }

  calculate() {
    if (this.mathValue === CONSTANTS_MATH_VALUE.PLUS) {
      this.value = +this.left;
      this.executeCommand(new AddCommand(+this.right));
    } else if (this.mathValue === CONSTANTS_MATH_VALUE.MINUS) {
      this.value = +this.left;
      this.executeCommand(new SubtractCommand(+this.right));
    } else if (this.mathValue === CONSTANTS_MATH_VALUE.MULTIPLICATION) {
      this.value = +this.left;
      this.executeCommand(new MultiplyCommand(+this.right));
    } else if (this.mathValue === CONSTANTS_MATH_VALUE.DIVISION) {
      this.value = +this.left;
      this.executeCommand(new DivideCommand(+this.right));
    }
    this.saveValues();
    this.isFirstInput = true;
  }

  cancel() {
    this.left = this.historyValue;
  }

  clear() {
    this.left = String(DEFAULT_INPUT_VALUE);
    this.right = '';
    this.mathValue = '';
  }

  reset() {
    this.left = String(DEFAULT_INPUT_VALUE);
    this.right = '';
    this.mathValue = '';
    this.value = DEFAULT_INPUT_VALUE;
    this.historyValue = '';
    this.isSuccessOperation = false;
    this.isFirstInput = true;
  }
}
