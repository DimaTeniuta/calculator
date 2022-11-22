import { calculateSquareRoot } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('calculateSquareRoot', () => {
  it('calculate', () => {
    expect(calculateSquareRoot(9)).toBe(3);
    expect(calculateSquareRoot(-9)).toBe(3);
    expect(calculateSquareRoot(4)).toEqual(2);
    expect(calculateSquareRoot(-4)).toEqual(2);
    expect(calculateSquareRoot(9)).not.toBe(0);
  });
});
