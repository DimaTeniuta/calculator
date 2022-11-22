import { calculatePercent } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('calculatePercent', () => {
  it('calculate', () => {
    expect(calculatePercent(100, 2)).toBe(2);
    expect(calculatePercent(100, 2)).toEqual(2);
    expect(calculatePercent(100, 2)).not.toBe(1);
  });
});
