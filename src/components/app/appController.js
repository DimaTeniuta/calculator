import { CONSTANTS_DATA_KEY } from '../../utils/variables';
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
      const dataKey = element.dataset.key;
      if (dataKey === CONSTANTS_DATA_KEY.NUM) {
        this.reducerNum(element);
      } else if (dataKey === CONSTANTS_DATA_KEY.MATH) {
        this.reducerMath(element);
      } else if (dataKey === CONSTANTS_DATA_KEY.RESULT) {
        this.reducerResult();
      } else if (dataKey === CONSTANTS_DATA_KEY.BACK) {
        this.reducerBack();
      } else if (dataKey === CONSTANTS_DATA_KEY.COMMA) {
        this.reducerComa(element);
      } else if (dataKey === CONSTANTS_DATA_KEY.AC) {
        this.reducerReset();
      } else if (dataKey === CONSTANTS_DATA_KEY.SIGN) {
        this.reducerSign();
      }
      this.viewValue();
    }
  }

  reducerNum(element) {
    if (!this.calculator.isSuccessOperation) {
      this.calculator.setValue(element.dataset.value);
    } else {
      this.calculator.isSuccessOperation = !this.calculator.isSuccessOperation;
      this.calculator.setValue(element.dataset.value);
    }
  }

  reducerMath(element) {
    if (!this.calculator.isSuccessOperation) {
      this.calculator.setMathValue(element.dataset.value);
    } else {
      this.calculator.isSuccessOperation = !this.calculator.isSuccessOperation;
      this.calculator.setMathValue(element.dataset.value);
    }
  }

  reducerResult() {
    this.calculator.calculate();
  }

  reducerBack() {
    this.calculator.cancel();
  }

  reducerComa(element) {
    this.calculator.setComma(element.dataset.value);
  }

  reducerReset() {
    this.calculator.reset();
  }

  reducerSign() {
    this.calculator.changeSing();
  }
}
