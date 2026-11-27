const OPERATIONS = Object.freeze({
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
});

/**
 * Apply a binary arithmetic operator to two numbers.
 * @param {number} a
 * @param {'+' | '-' | '*' | '/'} operator
 * @param {number} b
 * @returns {number}
 */
export function calculate(a, operator, b) {
  return OPERATIONS[operator](a, b);
}
