const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius, add } = require('../src/math')

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

// test('Async test demo', (done) => {
//   setTimeout( ()=> {
//     expect(1).toBe(1)
//     done()
//   }, 2000)
// })

// test('should add two numbers', (done) => {
//   add(2, 3).then((sum) => {
//     expect(sum).toBe(5)
//     done()
//   })
// })

// test('should add two numbers async/await', async () => {
//   const sum = await add(10, 22)
//   expect(sum).toBe(32)  
// })