import { describe, it, expect } from 'vitest';
import { calculate } from '../src/calculator.js';

describe('calculate', () => {
  it.each([
    ['adds two numbers', 2, '+', 3, 5],
    ['subtracts two numbers', 5, '-', 3, 2],
  ])('%s', (_name, a, operator, b, expected) => {
    expect(calculate(a, operator, b)).toBe(expected);
  });

  it.todo('multiplies two numbers');
  it.todo('divides two numbers');
  it.todo('throws on division by zero');
  it.todo('throws on unknown operator');
});
