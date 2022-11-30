import { calculateCubeRoot } from '../src/utils/mathFunctions';
import { it, expect, describe } from '@jest/globals';

describe('calculateCubeRoot', () => {
  it('calculate', () => {
    expect(calculateCubeRoot(27)).toBe(3);
    expect(calculateCubeRoot(-27)).toBe(-3);
    expect(calculateCubeRoot(125)).toEqual(5);
    expect(calculateCubeRoot(-125)).toEqual(-5);
    expect(calculateCubeRoot(125)).not.toBe(0);
  });
});
