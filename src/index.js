import './style.css';

const a = {
  a: "sdfsdf",
  b: "sdfdsfsdf",
};

const b = {
  d: "sdafsdf",
  c: { ...a },
};

console.log(b)
