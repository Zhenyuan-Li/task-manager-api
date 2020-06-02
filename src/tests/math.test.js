const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius } = require('../math')

test('should calculate total with tip', () => {
  const total = calculateTip(10, .3)
  expect(total).toBe(13)
})

test('should calculate total with default tip', () => {
  const total = calculateTip(10)
  expect(total).toBe(12.5)
})

test('should transfer fahrenheit to celsius', () => {
  const celsius = fahrenheitToCelsius(68)
  expect(celsius).toBe(20)
})

test('should transfer celsius to fahrenheit', () => {
  const fahrenheit = celsiusToFahrenheit(20)
  expect(fahrenheit).toBe(68)
})

