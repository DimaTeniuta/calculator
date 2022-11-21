import { customMathAbs } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('customMathAbs', () => {
  it('calculate', () => {
    expect(customMathAbs(2)).toBe(2);
    expect(customMathAbs(-2)).toBe(2);
    expect(customMathAbs(3)).toEqual(3);
    expect(customMathAbs(-3)).toEqual(3);
    expect(customMathAbs(3)).not.toBe(0);
  });
});
