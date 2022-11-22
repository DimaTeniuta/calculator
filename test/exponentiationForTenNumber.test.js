import { exponentiationForTenNumber } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('exponentiationForTenNumber', () => {
  it('calculate', () => {
    expect(exponentiationForTenNumber(2)).toBe(100);
    expect(exponentiationForTenNumber(-2)).toBe(0.01);
    expect(exponentiationForTenNumber(2)).toEqual(100);
    expect(exponentiationForTenNumber(-2)).toEqual(0.01);
    expect(exponentiationForTenNumber(3)).not.toBe(0);
  });
});
