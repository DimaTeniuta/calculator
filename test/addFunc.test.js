import { addFunc } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('mathFunc', () => {
  it('calculate', () => {
    expect(addFunc(1, 2)).toBe(3);
    expect(addFunc(1, 2)).toEqual(3);
    expect(addFunc(1, 2)).not.toBe(0);
  });
});
