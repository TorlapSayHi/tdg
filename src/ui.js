import { initialState, pressKey } from './keypad.js';

const KEYS = [
  { key: '7' }, { key: '8' }, { key: '9' }, { key: '/', label: '÷', kind: 'op' },
  { key: '4' }, { key: '5' }, { key: '6' }, { key: '*', label: '×', kind: 'op' },
  { key: '1' }, { key: '2' }, { key: '3' }, { key: '-', label: '−', kind: 'op' },
  { key: '0' }, { key: '=', kind: 'equals' }, { key: '+', kind: 'op' },
];

const renderKey = ({ key, label = key, kind = 'digit' }) =>
  `<button type="button" class="key key--${kind}" data-key="${key}">${label}</button>`;

export function mountCalculator(root) {
  root.innerHTML = `
    <div class="calculator">
      <output class="display" data-testid="display" aria-live="polite">${initialState.display}</output>
      <div class="keys">${KEYS.map(renderKey).join('')}</div>
    </div>
  `;
  const display = root.querySelector('[data-testid="display"]');
  let state = initialState;

  root.addEventListener('click', (event) => {
    const key = event.target.closest('[data-key]')?.dataset.key;
    if (!key) return;
    state = pressKey(state, key);
    display.textContent = state.display;
  });
}
