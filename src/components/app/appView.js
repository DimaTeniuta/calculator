import { DEFAULT_INPUT_VALUE } from '../../utils/variables';

class AppView {
  view(left, center, right) {
    const display = document.querySelector('.display');
    display.innerHTML = `${left === DEFAULT_INPUT_VALUE ? left : left || ''}${center || ''}${
      right === DEFAULT_INPUT_VALUE ? right : right || ''
    }`;
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
