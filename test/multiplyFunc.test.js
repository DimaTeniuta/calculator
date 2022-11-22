import { multiplyFunc } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('multiplyFunc', () => {
  it('calculate', () => {
    expect(multiplyFunc(1, 2)).toBe(2);
    expect(multiplyFunc(1, 2)).toEqual(2);
    expect(multiplyFunc(1, 2)).not.toBe(0);
  });
});
