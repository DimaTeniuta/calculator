import { CONSTANTS_DATA_KEY } from '../../utils/variables';
import { Calculator } from '../calculator/calculator';
import moduleAppView from './appView';

export class AppController {
  constructor() {
    this.calculator = new Calculator();
  }

  viewValue() {
    moduleAppView.view(
      this.calculator.state.left,
      this.calculator.state.mathValue,
      this.calculator.state.right,
      this.calculator.state.memory
    );
  }

  chooseOperation(element) {
    if (
      (element.classList.contains('key') && !element.classList.contains('disabled')) ||
      (element.parentElement.classList.contains('key') && !element.parentElement.classList.contains('disabled'))
    ) {
      moduleAppView.removeDisabledClass();
      const dataKey = element.dataset.key ? element.dataset.key : element.parentElement.dataset.key;
      if (dataKey === CONSTANTS_DATA_KEY.NUM) {
        this.reducerNum(element);
      } else if (dataKey === CONSTANTS_DATA_KEY.MATH) {
        this.reducerMath(element);
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
      } else if (dataKey === CONSTANTS_DATA_KEY.DEGREE) {
        this.reducerDegreeGroup(element);
      } else if (dataKey === CONSTANTS_DATA_KEY.ROOT) {
        this.reducerRootGroup(element);
      } else if (dataKey === CONSTANTS_DATA_KEY.FACTORIAL) {
        this.calculator.calculateFactorial();
      } else if (dataKey === CONSTANTS_DATA_KEY.DIVISION_BY_X) {
        this.calculator.calculateDivisionByX();
      } else if (dataKey === CONSTANTS_DATA_KEY.M_GROUP) {
        this.reducerMGroup(element);
      }
      this.viewValue();
    }
  }

  reducerNum(element) {
    if (this.calculator.state.isSuccessOperation) {
      this.calculator.state.isSuccessOperation = !this.calculator.state.isSuccessOperation;
    }
    this.calculator.setValue(element.dataset.value);
  }

  reducerMath(element) {
    const value = element.dataset.value ? element.dataset.value : element.parentElement.dataset.value;
    if (this.calculator.state.isSuccessOperation) {
      this.calculator.state.isSuccessOperation = !this.calculator.state.isSuccessOperation;
    }
    this.calculator.setMathValue(value);
  }

  reducerDegreeGroup(element) {
    const dataValue = element.dataset.value ? element.dataset.value : element.parentElement.dataset.value;
    if (dataValue === CONSTANTS_DATA_KEY.SQUARE_DEGREE) {
      this.calculator.calculateSquare();
    } else if (dataValue === CONSTANTS_DATA_KEY.CUBE_DEGREE) {
      this.calculator.calculateCube();
    } else if (dataValue === CONSTANTS_DATA_KEY.ANY_DEGREE) {
      this.calculator.calculateDegree();
    } else if (dataValue === CONSTANTS_DATA_KEY.TEN_DEGREE) {
      this.calculator.calculateTenDegree();
    }
  }

  reducerRootGroup(element) {
    const dataValue = element.dataset.value ? element.dataset.value : element.parentElement.dataset.value;
    if (dataValue === CONSTANTS_DATA_KEY.ROOT_SQUARE) {
      this.calculator.calculateSquareRoot();
    } else if (dataValue === CONSTANTS_DATA_KEY.ROOT_CUBE) {
      this.calculator.calculateCubeRoot();
    } else if (dataValue === CONSTANTS_DATA_KEY.ROOT_DEGREE) {
      this.calculator.calculateDegreeRoot();
    }
  }

  reducerMGroup(element) {
    const dataValue = element.dataset.value;
    if (dataValue === CONSTANTS_DATA_KEY.M_PLUS) {
      this.calculator.addValueInMemory();
    } else if (dataValue === CONSTANTS_DATA_KEY.M_MINUS) {
      this.calculator.subtractValueFromMemory();
    } else if (dataValue === CONSTANTS_DATA_KEY.MC) {
      this.calculator.clearMemory();
    } else if (dataValue === CONSTANTS_DATA_KEY.MR) {
      this.calculator.setValueFromMemory();
    }
  }
}
