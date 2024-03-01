const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('should return an array', () => {
    expect(Array.isArray(shuffle([1, 2, 3, 4, 5]))).toBe(true)
  })

  test('should return an array of the same length', () => {
    const array = [1, 2, 3, 4, 5]
    const shuffledArray = shuffle(array)
    expect(shuffledArray.length).toBe(array.length)
  })
});
