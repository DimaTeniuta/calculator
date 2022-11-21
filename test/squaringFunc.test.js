import { squaringFunc } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('squaringFunc', () => {
  it('calculate', () => {
    expect(squaringFunc(2)).toBe(4);
    expect(squaringFunc(-2)).toBe(4);
    expect(squaringFunc(3)).toEqual(9);
    expect(squaringFunc(-3)).toEqual(9);
    expect(squaringFunc(3)).not.toBe(0);
  });
});
