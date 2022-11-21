import Switch from '../switch/switchView';
import moduleAppView from './appView';

export default class App {
  constructor() {
    this.switch = new Switch();
  }
  start() {
    this.switch.addListenerToSwitch();
    moduleAppView.addListenerToCalculatorKeys();
  }
}
