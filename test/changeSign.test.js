import { changeSign } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('changeSign', () => {
  it('calculate', () => {
    expect(changeSign(2)).toBe(-2);
    expect(changeSign(-2)).toBe(2);
    expect(changeSign(3)).toEqual(-3);
    expect(changeSign(-3)).toEqual(3);
    expect(changeSign(-0)).not.toBe(-0);
  });
});
