const OPERATIONS = Object.freeze({
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
});

export function calculate(a, operator, b) {
  return OPERATIONS[operator](a, b);
}
