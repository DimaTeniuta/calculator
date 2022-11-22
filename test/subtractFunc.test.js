import { subtractFunc } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('subtractFunc', () => {
  it('calculate', () => {
    expect(subtractFunc(2, 1)).toBe(1);
    expect(subtractFunc(2, 1)).toEqual(1);
    expect(subtractFunc(2, 1)).not.toBe(0);
  });
});
