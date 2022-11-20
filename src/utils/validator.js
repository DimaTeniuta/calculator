import { ERROR, INFINITY } from './variables';

export const validatorErr = (value) => {
  if (value === ERROR || value === +INFINITY || value === +`-${INFINITY}`) {
    return false;
  }
  return true;
};
