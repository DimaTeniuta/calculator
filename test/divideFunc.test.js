import { divideFunc } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('divideFunc', () => {
  it('calculate', () => {
    expect(divideFunc(2, 1)).toBe(2);
    expect(divideFunc(2, 1)).toEqual(2);
    expect(divideFunc(2, 1)).not.toBe(0);
  });
});
