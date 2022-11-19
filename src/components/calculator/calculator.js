import { COMMA, CONSTANTS_MATH_VALUE, DEFAULT_INPUT_VALUE, ERROR, INFINITY } from '../../utils/variables';
import moduleAppView from '../app/appView';
import {
  AddCommand,
  CubeCommand,
  CubeRootCommand,
  DegreeCommand,
  DegreeRootCommand,
  DivideCommand,
  DivisionByXCommand,
  FactorialCommand,
  MultiplyCommand,
  PercentCommand,
  SignCommand,
  SquareCommand,
  SquareRootCommand,
  SubtractCommand,
  TenDegreeCommand,
} from './mathClasses';
import { addValueInMemoryCommand, SubtractValueFromMemoryCommand } from './memory';

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
    this.memory = DEFAULT_INPUT_VALUE;
    this.isSuccessOperation = false;
    this.isFirstInput = true;
    Calculator.context = this;
    Calculator.exists = true;
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.historyValue = this.value;
  }

  executeMemoryCommand(command) {
    const value = command.execute(this.memory);
    if (value === ERROR || value === +INFINITY || value === +`-${INFINITY}`) {
      return;
    }
    this.memory = value;
  }

  toggleIsFirstInput() {
    this.isFirstInput = !this.isFirstInput;
  }

  setError() {
    if (this.left === ERROR || this.left === +INFINITY || this.left === +`-${INFINITY}`) {
      this.left = ERROR;
      moduleAppView.addDisabledClass();
    }
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
    this.setError();
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
    } else if (this.mathValue === CONSTANTS_MATH_VALUE.ROOT) {
      this.calculateDegreeRoot();
      return;
    } else if (this.mathValue === CONSTANTS_MATH_VALUE.DIVISION_BY_X) {
      this.DivisionByXCommand();
      return;
    }
    this.saveValues();
    this.isFirstInput = true;
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
    } else if (this.right && this.mathValue) {
      this.calculate();
      this.mathValue = CONSTANTS_MATH_VALUE.DEGREE;
      return;
    }
    this.mathValue = CONSTANTS_MATH_VALUE.DEGREE;
  }

  calculateSquareRoot() {
    if (this.left && this.right) {
      this.calculate();
      this.executeCommand(new SquareRootCommand(+this.left));
      this.saveValues();
      this.isFirstInput = true;
      return;
    }
    this.executeCommand(new SquareRootCommand(+this.left));
    this.saveValues();
    this.isFirstInput = true;
  }

  calculateCubeRoot() {
    if (this.left && this.right) {
      this.calculate();
      this.executeCommand(new CubeRootCommand(+this.left));
      this.saveValues();
      this.isFirstInput = true;
      return;
    }
    this.executeCommand(new CubeRootCommand(+this.left));
    this.saveValues();
    this.isFirstInput = true;
  }

  calculateDegreeRoot() {
    if (this.left && this.right && this.mathValue === CONSTANTS_MATH_VALUE.ROOT) {
      this.executeCommand(new DegreeRootCommand(+this.left, +this.right));
      this.saveValues();
      this.isFirstInput = true;
      return;
    } else if (this.mathValue && this.right) {
      this.calculate();
      this.mathValue = CONSTANTS_MATH_VALUE.ROOT;
      return;
    }
    this.mathValue = CONSTANTS_MATH_VALUE.ROOT;
  }

  calculateTenDegree() {
    if (this.left && this.right) {
      this.calculate();
      this.executeCommand(new TenDegreeCommand(+this.left));
      this.saveValues();
      this.isFirstInput = true;
      return;
    }
    this.executeCommand(new TenDegreeCommand(+this.left));
    this.saveValues();
    this.isFirstInput = true;
  }

  calculateFactorial() {
    if (this.left && this.right) {
      this.calculate();
      this.executeCommand(new FactorialCommand(+this.left));
      this.saveValues();
      this.isFirstInput = true;
      return;
    }
    this.executeCommand(new FactorialCommand(+this.left));
    this.saveValues();
    this.isFirstInput = true;
  }

  calculateDivisionByX() {
    if (this.left && this.right) {
      this.calculate();
      this.executeCommand(new DivisionByXCommand(+this.left));
      this.saveValues();
      this.isFirstInput = true;
      return;
    }
    this.executeCommand(new DivisionByXCommand(+this.left));
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
    this.historyValue = this.left !== ERROR ? this.left : String(DEFAULT_INPUT_VALUE);
    this.left = String(DEFAULT_INPUT_VALUE);
    this.right = '';
    this.mathValue = '';
    this.value = DEFAULT_INPUT_VALUE;
    this.isSuccessOperation = false;
    this.isFirstInput = true;
  }

  addValueInMemory() {
    if (this.left && this.right) {
      this.calculate();
      this.executeMemoryCommand(new addValueInMemoryCommand(+this.left));
      return;
    }
    this.executeMemoryCommand(new addValueInMemoryCommand(+this.left));
  }

  subtractValueFromMemory() {
    if (this.left && this.right) {
      this.calculate();
      this.executeMemoryCommand(new SubtractValueFromMemoryCommand(+this.left));
      return;
    }
    this.executeMemoryCommand(new SubtractValueFromMemoryCommand(+this.left));
  }

  clearMemory() {
    this.memory = DEFAULT_INPUT_VALUE;
  }

  setValueFromMemory() {
    if (this.left && this.right) {
      this.right = this.memory;
      return;
    }
    this.left = this.memory;
  }
}
