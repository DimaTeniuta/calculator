import { divisionByNumber } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('divisionByNumber', () => {
  it('calculate', () => {
    expect(divisionByNumber(2)).toBe(0.5);
    expect(divisionByNumber(-2)).toBe(-0.5);
    expect(divisionByNumber(2)).toEqual(0.5);
    expect(divisionByNumber(-2)).toEqual(-0.5);
    expect(divisionByNumber(3)).not.toBe(0);
  });
});
