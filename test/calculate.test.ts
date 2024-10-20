import calculate from '../src/calculate'

test('should return 0 for an empty string', () => {
    expect(calculate('')).toBe(0)
  })

test('should return the sum for a string with one number', () => {
  expect(calculate('1')).toBe(1);
});

test('should handle different delimiters', () => {
  expect(calculate('1\n2,3')).toBe(6);
});

test('should throw an exception for negative numbers', () => {
  expect(() => calculate('-1')).toThrow('negative numbers not allowed');
});