export class SaveValueInMemoryCommand {
  constructor(value) {
    this.value = value;
  }

  execute() {
    return this.value;
  }
}
