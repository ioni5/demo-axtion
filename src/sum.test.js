import {sum} from "./sum.js";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(7, 7)).toBe(14);
  expect(sum(555, 5)).toBe(560);
});