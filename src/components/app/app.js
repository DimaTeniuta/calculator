import moduleAppView from './appView';

export default class App {
  start() {
    moduleAppView.addListenerToCalculatorKeys();
  }
}
