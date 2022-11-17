import Calculator from '../calculator/calculator';
import AppView from './appView';

export class AppController {
  constructor() {
    this.calculator = new Calculator();
    this.appView = new AppView();
  }

  viewValue() {
    this.appView.view(this.calculator.left, this.calculator.mathValue, this.calculator.right);
  }

  chooseOperation(element) {
    if (element.classList.contains('key')) {
      if (element.dataset.key === 'num') {
        if (!this.calculator.isSuccessOperation) {
          this.calculator.setValue(element.dataset.value);
        } else {
          this.calculator.isSuccessOperation = !this.calculator.isSuccessOperation;
          this.calculator.clear();
          this.calculator.setValue(element.dataset.value);
        }
      } else if (element.dataset.key === 'math') {
        if (!this.calculator.isSuccessOperation) {
          this.calculator.setMathValue(element.dataset.value);
        } else {
          this.calculator.isSuccessOperation = !this.calculator.isSuccessOperation;
          this.calculator.setMathValue(element.dataset.value);
        }
      } else if (element.dataset.key === 'result') {
        this.calculator.calculate();
      } else if (element.dataset.key === 'back') {
        this.calculator.cancel();
      }
      this.viewValue();
    }
  }
}
