import { KeyCodes } from './keyCodes';

export function triggerKeyboardEvent(element: HTMLElement, keyCode: number) {
  const keyName = Object.keys(KeyCodes).find(key => KeyCodes[key as keyof KeyCodes] === keyCode) as string;
  const event = new KeyboardEvent('keydown', {
    key: keyName,
    code: keyName,
    which: keyCode,
    keyCode: keyCode,
    bubbles: true,
    cancelable: true
  });

  element.dispatchEvent(event);
}
