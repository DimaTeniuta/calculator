import { calculateRoot } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('calculateRoot', () => {
  it('calculate', () => {
    expect(calculateRoot(27, 3)).toBe(3);
    expect(calculateRoot(-27, 3)).toBe(3);
    expect(calculateRoot(9, 2)).toEqual(3);
    expect(calculateRoot(-9, 2)).toEqual(3);
    expect(calculateRoot(9, 2)).not.toBe(0);
  });
});
