import { cubingFunc } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('cubingFunc', () => {
  it('calculate', () => {
    expect(cubingFunc(3)).toBe(27);
    expect(cubingFunc(-3)).toBe(-27);
    expect(cubingFunc(5)).toEqual(125);
    expect(cubingFunc(-5)).toEqual(-125);
    expect(cubingFunc(5)).not.toBe(0);
  });
});
