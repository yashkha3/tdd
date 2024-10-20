import calculate from '../src/calculate'

test('should return 0 for an empty string', () => {
    expect(calculate('')).toBe(0)
  })
