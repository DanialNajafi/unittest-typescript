import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});
test('multiply three by four is twelve', () => {
  // Arrange
  const a = 3;
  const b = 4;
  const expected = 12;

  // Act
  const result = multiply(a, b);

  // Assert
  expect(result).toBe(expected);
});
test('divide six by three is two', () => {
  // Arrange
  const a = 6;
  const b = 3;
  const expected = 2;

  // Act
  const result = divide(a, b);

  // Assert
  expect(result).toBe(expected);
});
test('divide by zero throws an error', () => {
  const a = 10;
  const b = 0;

  expect(() => divide(a, b)).toThrow('Division durch 0 ist nicht erlaubt');
});
