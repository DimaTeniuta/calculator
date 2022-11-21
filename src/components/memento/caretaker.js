export default class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento() {
    if (this.values.length > 1) {
      this.values.pop();
      return this.values.pop();
    } else if (this.values.length === 1) {
      return this.values.pop();
    }
    return null;
  }
}
