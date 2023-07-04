const sum = require('./sum')
test('should add the numbers correctly', () => {
  expect(sum(2,3)).toBe(5)
})
