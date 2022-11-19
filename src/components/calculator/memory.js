import { addFunc, subtractFunc } from '../../utils/mathFunctions';

export class addValueInMemoryCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return addFunc(currentValue, this.value);
  }
}

export class SubtractValueFromMemoryCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return subtractFunc(currentValue, this.value);
  }
}
