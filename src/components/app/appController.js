import { CONSTANTS_DATA_KEY } from '../../utils/variables';
import Calculator from '../calculator/calculator';
import moduleAppView from './appView';

export class AppController {
  constructor() {
    this.calculator = new Calculator();
  }

  viewValue() {
    moduleAppView.view(this.calculator.left, this.calculator.mathValue, this.calculator.right, this.calculator.memory);
  }

  chooseOperation(element) {
    if (element.classList.contains('key') && !element.classList.contains('disabled')) {
      moduleAppView.removeDisabledClass();
      const dataKey = element.dataset.key;
      if (dataKey === CONSTANTS_DATA_KEY.NUM) {
        if (!this.calculator.isSuccessOperation) {
          this.calculator.setValue(element.dataset.value);
        } else {
          this.calculator.isSuccessOperation = !this.calculator.isSuccessOperation;
          this.calculator.setValue(element.dataset.value);
        }
      } else if (dataKey === CONSTANTS_DATA_KEY.MATH) {
        if (!this.calculator.isSuccessOperation) {
          this.calculator.setMathValue(element.dataset.value);
        } else {
          this.calculator.isSuccessOperation = !this.calculator.isSuccessOperation;
          this.calculator.setMathValue(element.dataset.value);
        }
      } else if (dataKey === CONSTANTS_DATA_KEY.RESULT) {
        this.calculator.calculate();
      } else if (dataKey === CONSTANTS_DATA_KEY.BACK) {
        this.calculator.cancel();
      } else if (dataKey === CONSTANTS_DATA_KEY.COMMA) {
        this.calculator.setComma(element.dataset.value);
      } else if (dataKey === CONSTANTS_DATA_KEY.AC) {
        this.calculator.reset();
      } else if (dataKey === CONSTANTS_DATA_KEY.SIGN) {
        this.calculator.changeSing();
      } else if (dataKey === CONSTANTS_DATA_KEY.PERCENT) {
        this.calculator.calculatePercent();
      } else if (dataKey === CONSTANTS_DATA_KEY.SQUARE) {
        this.calculator.calculateSquare();
      } else if (dataKey === CONSTANTS_DATA_KEY.CUBE) {
        this.calculator.calculateCube();
      } else if (dataKey === CONSTANTS_DATA_KEY.DEGREE) {
        this.calculator.calculateDegree();
      } else if (dataKey === CONSTANTS_DATA_KEY.ROOT_SQUARE) {
        this.calculator.calculateSquareRoot();
      } else if (dataKey === CONSTANTS_DATA_KEY.ROOT_CUBE) {
        this.calculator.calculateCubeRoot();
      } else if (dataKey === CONSTANTS_DATA_KEY.ROOT_DEGREE) {
        this.calculator.calculateDegreeRoot();
      } else if (dataKey === CONSTANTS_DATA_KEY.TEN_DEGREE) {
        this.calculator.calculateTenDegree();
      } else if (dataKey === CONSTANTS_DATA_KEY.FACTORIAL) {
        this.calculator.calculateFactorial();
      } else if (dataKey === CONSTANTS_DATA_KEY.DIVISION_BY_X) {
        this.calculator.calculateDivisionByX();
      } else if (dataKey === CONSTANTS_DATA_KEY.M_PLUS) {
        this.calculator.addValueInMemory();
      } else if (dataKey === CONSTANTS_DATA_KEY.M_MINUS) {
        this.calculator.subtractValueFromMemory();
      } else if (dataKey === CONSTANTS_DATA_KEY.MC) {
        this.calculator.clearMemory();
      } else if (dataKey === CONSTANTS_DATA_KEY.MR) {
        this.calculator.setValueFromMemory();
      }
      this.viewValue();
    }
  }
}
