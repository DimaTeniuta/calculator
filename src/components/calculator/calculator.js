import { AddCommand, MultiplyCommand, SubtractCommand } from './mathClasses';

export default class Calculator {
  constructor() {
    this.left = '';
    this.right = '';
    this.mathValue = '';
    this.value = 0;
    this.historyValue = '';
    this.isSuccessOperation = false;
  }

  setValue(value) {
    if (!this.mathValue) {
      this.left += value;
    } else {
      this.right += value;
    }
  }

  setMathValue(value) {
    this.mathValue = value;
  }

  saveValues() {
    this.historyValue = this.left;
    this.clear();
    this.left = this.value;
    this.value = 0;
    this.isSuccessOperation = true;
  }

  calculate() {
    if (this.mathValue === '+') {
      this.executeCommand(new AddCommand(+this.left));
      this.executeCommand(new AddCommand(+this.right));
    } else if (this.mathValue === '-') {
      this.executeCommand(new AddCommand(+this.left));
      this.executeCommand(new SubtractCommand(+this.right));
    } else if (this.mathValue === '*') {
      this.executeCommand(new AddCommand(+this.left));
      this.executeCommand(new MultiplyCommand(+this.right));
    } else if (this.mathValue === '/') {
      this.executeCommand(new AddCommand(+this.left));
      this.executeCommand(new MultiplyCommand(+this.right));
    }
    this.saveValues();
  }

  cancel() {
    this.left = this.historyValue;
  }

  clear() {
    this.left = '';
    this.right = '';
    this.mathValue = '';
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.historyValue = this.value;
  }
}
