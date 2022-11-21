import { addFunc } from '../src/utils/mathFunctions';
import { test, expect } from '@jest/globals';

test('mathFunc', () => {
  expect(addFunc(1, 2)).toBe(3);
});
