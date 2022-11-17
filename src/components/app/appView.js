export default class AppView {
  view(left, center, right) {
    const display = document.querySelector('.display');
    display.innerHTML = `${left || ''}${center || ''}${right || ''}`;
    console.log(this.calculator);
  }
}
