import { DEFAULT_INPUT_VALUE } from '../../utils/variables';
import { AppController } from './appController';

class AppView {
  constructor() {
    this.appController = new AppController();
  }

  addListenerToCalculatorKeys() {
    const calcArea = document.querySelector('.wrap-keys');
    calcArea.addEventListener('click', (e) => {
      this.appController.chooseOperation(e.target);
    });
  }

  view(left, center, right, memoryValue) {
    const input = document.querySelector('.value');
    const memory = document.querySelector('.memory');
    input.innerHTML = `${left === DEFAULT_INPUT_VALUE ? left : left || ''} ${center || ''} ${
      right === DEFAULT_INPUT_VALUE ? right : right || ''
    }`;
    memory.innerHTML = memoryValue === DEFAULT_INPUT_VALUE ? memoryValue : memoryValue || '';
  }

  addDisabledClass() {
    const buttons = document.querySelectorAll('[data-mathBtn]');
    buttons.forEach((el) => el.classList.add('disabled'));
  }

  removeDisabledClass() {
    const buttons = document.querySelectorAll('[data-mathBtn]');
    buttons.forEach((el) => el.classList.remove('disabled'));
  }
}

const moduleAppView = new AppView();
export default moduleAppView;
