// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { mountCalculator } from '../src/ui.js';

describe('calculator UI', () => {
  let root;

  const press = (...keys) => {
    for (const key of keys) {
      root.querySelector(`[data-key="${key}"]`).click();
    }
  };
  const display = () => root.querySelector('[data-testid="display"]').textContent;

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    root = document.getElementById('app');
    mountCalculator(root);
  });

  it('shows the result of 2 + 3 =', () => {
    press('2', '+', '3', '=');
    expect(display()).toBe('5');
  });
});
