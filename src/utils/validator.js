import { COMMA, ERROR, INFINITY } from './variables';

export const validatorErr = (value) => {
  if (value === ERROR || value === +INFINITY || value === +`-${INFINITY}`) {
    return false;
  }
  return true;
};

export const commaValidator = (value) => {
  if (value[value.length - 1] === COMMA) {
    return value.slice(0, -1);
  }
  return value;
};
