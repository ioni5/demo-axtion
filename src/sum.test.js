import {sum} from "./sum.js";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(7, 7)).toBe(14);
  expect(sum(555, 5)).toBe(560);
  expect(sum(0, 5)).toBe(5);
  expect(sum(0, 0)).toBe(0);
  expect(sum(1, 1)).toBe(2);
  expect(sum(1, 1)).toBe(2);
  expect(sum(1, 1)).toBe(2);
  expect(sum(1, 10)).toBe(11);
  expect(sum(0, 5)).toBe(5);
  expect(sum(0, 5)).toBe(5);
  expect(sum(0, 5)).toBe(5);
  expect(sum(50, 50)).toBe(100);
  expect(sum(50, 50)).toBe(100);
  expect(sum(50, 50)).toBe(100);
});