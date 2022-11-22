export default class Switch {
  addListenerToSwitch() {
    const switcher = document.querySelector('.input');
    switcher.addEventListener('change', (e) => {
      const value = e.target.checked;
      if (value) {
        this.addDarkTheme();
        return;
      }
      this.removeDarkTheme();
    });
  }

  addDarkTheme() {
    const calc = document.querySelector('.wrap-calc');
    const keys = document.querySelectorAll('.key');
    keys.forEach((el) => el.classList.add('dark'));
    calc.classList.add('dark');
  }

  removeDarkTheme() {
    const calc = document.querySelector('.wrap-calc');
    const keys = document.querySelectorAll('.key');
    keys.forEach((el) => el.classList.remove('dark'));
    calc.classList.remove('dark');
  }
}
