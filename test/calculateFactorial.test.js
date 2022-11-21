import { calculateFactorial } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('calculateFactorial', () => {
  it('calculate', () => {
    expect(calculateFactorial(2)).toBe(2);
    expect(calculateFactorial(5)).toEqual(120);
    expect(calculateFactorial(1.6507955160908452e136)).toEqual('Error');
    expect(calculateFactorial(2)).not.toBe(0);
  });
});
