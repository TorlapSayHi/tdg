import { calculate } from './calculator.js';

const KEYS = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '=', '+'];

export function mountCalculator(root) {
  root.innerHTML = `
    <output data-testid="display">0</output>
    <div class="keys">
      ${KEYS.map((key) => `<button type="button" data-key="${key}">${key}</button>`).join('')}
    </div>
  `;
  const display = root.querySelector('[data-testid="display"]');

  let current = '';
  let previous = null;
  let operator = null;

  root.addEventListener('click', (event) => {
    const key = event.target.dataset?.key;
    if (!key) return;

    if (/^\d$/.test(key)) {
      current += key;
      display.textContent = current;
    } else if (key === '=') {
      const result = calculate(previous, operator, Number(current));
      display.textContent = String(result);
      current = String(result);
      previous = null;
      operator = null;
    } else {
      previous = Number(current);
      operator = key;
      current = '';
    }
  });
}
