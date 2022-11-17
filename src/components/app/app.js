import { AppController } from './appController';

export default class App {
  constructor() {
    this.appController = new AppController();
  }

  start() {
    const calcArea = document.querySelector('.wrap-keys');
    calcArea.addEventListener('click', (e) => {
      this.appController.chooseOperation(e.target);
    });
  }
}
