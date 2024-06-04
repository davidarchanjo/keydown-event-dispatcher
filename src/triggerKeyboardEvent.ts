import { KeyCodes } from './keyCodes';

export function triggerKeyboardEvent(element: HTMLElement, key: KeyCodes) {
  const event = new KeyboardEvent('keydown', {
    key: KeyCodes[key],
    code: KeyCodes[key],
    which: key,
    keyCode: key,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(event);
};