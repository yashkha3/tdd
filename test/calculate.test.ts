import calculate from '../src/calculate'

test('should return 0 for an empty string', () => {
    expect(calculate('')).toBe(0)
});

test('should return the sum for a string with one number', () => {
  expect(calculate('1')).toBe(1);
});

test('should handle different delimiters', () => {
  expect(calculate('1\n2,3')).toBe(6);
});

test('should throw an exception for negative numbers first', () => {
  expect(() => calculate('-1')).toThrow('negative numbers not allowed -1');
});

test('should handle multi-digit numbers in input', () => {
  expect(calculate('1234567')).toBe(1234567);
});

test('should convert next line to commas', () => {
  expect(calculate('1,2,3')).toBe(6);
});

test('should throw an exception for negative numbers second', () => {
  expect(() => calculate('-1\n-4')).toThrow('negative numbers not allowed -1,-4');
});

test('should throw an exception for negative numbers third', () => {
  expect(() => calculate('-1,-4,-7')).toThrow('negative numbers not allowed -1,-4,-7');
});

test('should handle characters in input first', () => {
  expect(calculate('a,b,c')).toBe(0);
});

test('should handle characters in input second', () => {
  expect(calculate('a,2,c')).toBe(2);
});

test('should handle custom delimiter first', () => {
  expect(calculate('//;\n1;2')).toBe(3);
});

test('should handle custom delimiter second', () => {
  expect(calculate('//{\n1{2{3')).toBe(6);
});

test('should handle custom delimiter fourth', () => {
  expect(calculate('//{4{5{6')).toBe(15);
});