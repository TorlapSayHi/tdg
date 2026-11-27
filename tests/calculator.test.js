import { describe, it, expect } from 'vitest';
import { calculate } from '../src/calculator.js';

describe('calculate', () => {
  it('adds two numbers', () => {
    expect(calculate(2, '+', 3)).toBe(5);
  });

  it.todo('subtracts two numbers');
  it.todo('multiplies two numbers');
  it.todo('divides two numbers');
  it.todo('throws on division by zero');
  it.todo('throws on unknown operator');
});
