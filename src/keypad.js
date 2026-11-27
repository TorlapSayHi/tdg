import { calculate } from './calculator.js';

export const initialState = Object.freeze({
  display: '0',
  current: '',
  previous: null,
  operator: null,
});

const isDigit = (key) => /^\d$/.test(key);

/**
 * Pure keypad state transition: returns the next state for a pressed key.
 * @param {typeof initialState} state
 * @param {string} key
 * @returns {typeof initialState}
 */
export function pressKey(state, key) {
  if (isDigit(key)) {
    const current = state.current + key;
    return { ...state, current, display: current };
  }

  if (key === '=') {
    const result = String(calculate(state.previous, state.operator, Number(state.current)));
    return { ...initialState, current: result, display: result };
  }

  return { ...state, previous: Number(state.current), operator: key, current: '' };
}
