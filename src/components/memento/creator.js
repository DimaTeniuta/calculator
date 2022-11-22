import Memento from './memento';

export const creator = {
  save: (value) => new Memento(value),
  restore: (memento) => memento?.value,
};
