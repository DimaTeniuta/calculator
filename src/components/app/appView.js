import { DEFAULT_INPUT_VALUE } from '../../utils/variables';

class AppView {
  view(left, center, right, memoryValue) {
    const input = document.querySelector('.input');
    const memory = document.querySelector('.memory');
    input.innerHTML = `${left === DEFAULT_INPUT_VALUE ? left : left || ''}${center || ''}${
      right === DEFAULT_INPUT_VALUE ? right : right || ''
    }`;
    memory.innerHTML = memoryValue || '';
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
