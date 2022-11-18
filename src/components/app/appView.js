import { DEFAULT_INPUT_VALUE } from '../../utils/variables';

export default class AppView {
  view(left, center, right) {
    const display = document.querySelector('.display');
    display.innerHTML = `${left === DEFAULT_INPUT_VALUE ? left : left || ''}${center || ''}${
      right === DEFAULT_INPUT_VALUE ? right : right || ''
    }`;
  }
}
