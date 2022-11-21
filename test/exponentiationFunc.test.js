import { exponentiationFunc } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('exponentiationFunc', () => {
  it('calculate', () => {
    expect(exponentiationFunc(3, 2)).toBe(9);
    expect(exponentiationFunc(-3, 2)).toBe(9);
    expect(exponentiationFunc(5, 3)).toEqual(125);
    expect(exponentiationFunc(-5, 3)).toEqual(-125);
    expect(exponentiationFunc(5, 1)).not.toBe(0);
  });
});
