import { COMMA, CONSTANTS_MATH_VALUE, DEFAULT_INPUT_VALUE } from '../../utils/variables';
import {
  AddCommand,
  CubeCommand,
  DegreeCommand,
  DivideCommand,
  MultiplyCommand,
  PercentCommand,
  SignCommand,
  SquareCommand,
  SubtractCommand,
} from './mathClasses';

export default class Calculator {
  constructor() {
    if (Calculator.exists) {
      return Calculator.context;
    }
    this.left = String(DEFAULT_INPUT_VALUE);
    this.right = '';
    this.mathValue = '';
    this.value = DEFAULT_INPUT_VALUE;
    this.historyValue = '';
    this.isSuccessOperation = false;
    this.isFirstInput = true;
    Calculator.context = this;
    Calculator.exists = true;
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
      if (this.left.includes(COMMA)) return;
      if (this.isFirstInput) {
        this.isFirstInput = false;
        this.left = DEFAULT_INPUT_VALUE + value;
      } else {
        this.left += value;
      }
    } else {
      if (this.right.includes(COMMA)) return;
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

  changeSing() {
    if (this.right) {
      this.executeCommand(new SignCommand(+this.right));
      this.right = this.value;
      return;
    }
    this.executeCommand(new SignCommand(+this.left));
    this.left = this.value;
  }

  calculatePercent() {
    if (!this.right) {
      this.saveValues();
      this.isFirstInput = true;
      return;
    }
    this.executeCommand(new PercentCommand(+this.left, +this.right));
    this.right = this.value;
    this.value = this.left;
    this.calculate();
  }

  calculateSquare() {
    if (this.left && this.right) {
      this.calculate();
      this.executeCommand(new SquareCommand(+this.left));
      this.saveValues();
      this.isFirstInput = true;
      return;
    }
    this.executeCommand(new SquareCommand(+this.left));
    this.saveValues();
    this.isFirstInput = true;
  }

  calculateCube() {
    if (this.left && this.right) {
      this.calculate();
      this.executeCommand(new CubeCommand(+this.left));
      this.saveValues();
      this.isFirstInput = true;
      return;
    }
    this.executeCommand(new CubeCommand(+this.left));
    this.saveValues();
    this.isFirstInput = true;
  }

  calculateDegree() {
    if (this.left && this.right && this.mathValue === CONSTANTS_MATH_VALUE.DEGREE) {
      this.executeCommand(new DegreeCommand(+this.left, +this.right));
      this.saveValues();
      this.isFirstInput = true;
      return;
    }
    this.mathValue = CONSTANTS_MATH_VALUE.DEGREE;
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
    } else if (this.mathValue === CONSTANTS_MATH_VALUE.DEGREE) {
      this.calculateDegree();
      return;
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
    this.historyValue = this.left;
    this.left = String(DEFAULT_INPUT_VALUE);
    this.right = '';
    this.mathValue = '';
    this.value = DEFAULT_INPUT_VALUE;
    this.isSuccessOperation = false;
    this.isFirstInput = true;
  }
}
