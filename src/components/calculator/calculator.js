import { validatorErr } from '../../utils/validator';
import { CONSTANTS_MATH_VALUE, DEFAULT_INPUT_VALUE, ERROR } from '../../utils/variables';
import moduleAppView from '../app/appView';
import {
  AddCommand,
  DivideCommand,
  DivisionByXCommand,
  FactorialCommand,
  MathCommand,
  MultiplyCommand,
  PercentCommand,
  SignCommand,
  SubtractCommand,
} from './executors/math';
import {
  addValueInMemoryCommand,
  ClearMemoryCommand,
  DownloadMemoryValueCommand,
  SubtractValueFromMemoryCommand,
} from './executors/memory';
import { ResetCommand } from './executors/other';
import { CubeRootCommand, DegreeRootCommand, SquareRootCommand } from './executors/root';
import { CommaCommand, MathValueCommand, ValueCommand } from './executors/values';
import { SquareCommand, CubeCommand, TenDegreeCommand } from './executors/degree';
import Caretaker from '../memento/caretaker';
import { creator } from '../memento/creator';

export class Calculator {
  constructor() {
    this.state = {
      left: String(DEFAULT_INPUT_VALUE),
      right: '',
      mathValue: '',
      value: DEFAULT_INPUT_VALUE,
      memory: DEFAULT_INPUT_VALUE,
      isSuccessOperation: false,
      isFirstInput: true,
    };
    this.caretaker = new Caretaker();
  }

  executeCommand(command) {
    this.state = command.execute({ ...this.state });
    if (validatorErr(this.state.value)) {
      this.caretaker.addMemento(creator.save({ ...this.state }));
    }
  }

  setError() {
    if (!validatorErr(+this.state.left)) {
      this.state.left = ERROR;
      moduleAppView.addDisabledClass();
    }
  }

  saveValues() {
    this.state.historyValue = this.state.left;
    this.state.right = '';
    this.state.mathValue = '';
    this.state.left = String(this.state.value);
    this.setError();
    this.state.value = DEFAULT_INPUT_VALUE;
    this.state.isSuccessOperation = true;
    this.state.isFirstInput = true;
  }

  setValue(value) {
    this.executeCommand(new ValueCommand(value));
  }

  setComma(value) {
    this.executeCommand(new CommaCommand(value));
  }

  setMathValue(value) {
    if (this.state.mathValue && this.state.right) {
      this.calculate();
    }
    this.executeCommand(new MathCommand(value));
  }

  changeSing() {
    this.executeCommand(new SignCommand());
  }

  calculate() {
    if (this.state.mathValue === CONSTANTS_MATH_VALUE.PLUS) {
      this.executeCommand(new AddCommand(+this.state.right));
    } else if (this.state.mathValue === CONSTANTS_MATH_VALUE.MINUS) {
      this.executeCommand(new SubtractCommand(+this.state.right));
    } else if (this.state.mathValue === CONSTANTS_MATH_VALUE.MULTIPLICATION) {
      this.executeCommand(new MultiplyCommand(+this.state.right));
    } else if (this.state.mathValue === CONSTANTS_MATH_VALUE.DIVISION) {
      this.executeCommand(new DivideCommand(+this.state.right));
    } else if (this.state.mathValue === CONSTANTS_MATH_VALUE.DEGREE) {
      this.calculateDegree();
      return;
    } else if (this.state.mathValue === CONSTANTS_MATH_VALUE.ROOT) {
      this.calculateDegreeRoot();
      return;
    } else if (this.state.mathValue === CONSTANTS_MATH_VALUE.DIVISION_BY_X) {
      this.DivisionByXCommand();
      return;
    }
    this.saveValues();
  }

  calculateDegree() {
    if (this.state.left && this.state.right && this.state.mathValue === CONSTANTS_MATH_VALUE.DEGREE) {
      this.executeCommand(new DegreeRootCommand(+this.state.left, +this.state.right));
      this.saveValues();
      return;
    } else if (this.state.right && this.state.mathValue) {
      this.calculate();
      this.executeCommand(new MathValueCommand(CONSTANTS_MATH_VALUE.DEGREE));
      return;
    }
    this.executeCommand(new MathValueCommand(CONSTANTS_MATH_VALUE.DEGREE));
  }

  calculateDegreeRoot() {
    if (this.state.left && this.state.right && this.state.mathValue === CONSTANTS_MATH_VALUE.ROOT) {
      this.executeCommand(new DegreeRootCommand(+this.state.left, +this.state.right));
      this.saveValues();
      return;
    } else if (this.state.mathValue && this.state.right) {
      this.calculate();
      this.executeCommand(new MathValueCommand(CONSTANTS_MATH_VALUE.ROOT));
      return;
    }
    this.executeCommand(new MathValueCommand(CONSTANTS_MATH_VALUE.ROOT));
  }

  calculateDivisionByX() {
    if (this.state.left && this.state.right) {
      this.calculate();
      this.executeCommand(new DivisionByXCommand(+this.state.left));
      this.saveValues();
      return;
    }
    this.executeCommand(new DivisionByXCommand(+this.state.left));
    this.saveValues();
  }

  calculatePercent() {
    if (!this.state.right) {
      this.saveValues();
      return;
    }
    this.executeCommand(new PercentCommand(+this.state.left, +this.state.right));
    this.calculate();
  }

  calculateSquare() {
    if (this.state.left && this.state.right) {
      this.calculate();
      this.executeCommand(new SquareCommand(+this.state.left));
      this.saveValues();
      return;
    }
    this.executeCommand(new SquareCommand(+this.state.left));
    this.saveValues();
  }

  calculateCube() {
    if (this.state.left && this.state.right) {
      this.calculate();
      this.executeCommand(new CubeCommand(+this.state.left));
      this.saveValues();
      return;
    }
    this.executeCommand(new CubeCommand(+this.state.left));
    this.saveValues();
  }

  calculateSquareRoot() {
    if (this.state.left && this.state.right) {
      this.calculate();
      this.executeCommand(new SquareRootCommand(+this.state.left));
      this.saveValues();
      return;
    }
    this.executeCommand(new SquareRootCommand(+this.state.left));
    this.saveValues();
  }

  calculateCubeRoot() {
    if (this.state.left && this.state.right) {
      this.calculate();
      this.executeCommand(new CubeRootCommand(+this.state.left));
      this.saveValues();
      return;
    }
    this.executeCommand(new CubeRootCommand(+this.state.left));
    this.saveValues();
  }

  calculateTenDegree() {
    if (this.state.left && this.state.right) {
      this.calculate();
      this.executeCommand(new TenDegreeCommand(+this.state.left));
      this.saveValues();
      return;
    }
    this.executeCommand(new TenDegreeCommand(+this.state.left));
    this.saveValues();
  }

  calculateFactorial() {
    if (this.state.left && this.state.right) {
      this.calculate();
      this.executeCommand(new FactorialCommand(+this.state.left));
      this.saveValues();
      return;
    }
    this.executeCommand(new FactorialCommand(+this.state.left));
    this.saveValues();
  }

  cancel() {
    const history = creator.restore(this.caretaker.getMemento());
    if (history) {
      this.state = history;
    }
  }

  reset() {
    this.executeCommand(new ResetCommand());
  }

  addValueInMemory() {
    if (this.state.left && this.state.right) {
      this.calculate();
      this.executeCommand(new addValueInMemoryCommand(+this.state.left));
      return;
    }
    this.executeCommand(new addValueInMemoryCommand(+this.state.left));
  }

  subtractValueFromMemory() {
    if (this.state.left && this.state.right) {
      this.calculate();
      this.executeCommand(new SubtractValueFromMemoryCommand(+this.state.left));
      return;
    }
    this.executeCommand(new SubtractValueFromMemoryCommand(+this.state.left));
  }

  clearMemory() {
    this.executeCommand(new ClearMemoryCommand());
  }

  setValueFromMemory() {
    this.executeCommand(new DownloadMemoryValueCommand());
  }
}
