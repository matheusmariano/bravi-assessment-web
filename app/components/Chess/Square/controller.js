import {
  isEven,
  isOdd,
} from '../../../libs/Sauce/integer';

export const DARK = 'dark';
export const LIGHT = 'light';

export function getSquareColor(x, y) {
  return (isEven(x) && isEven(y)) || (isOdd(x) && isOdd(y)) ? LIGHT : DARK;
}

export function getSquareName(x, y) {
  return String.fromCharCode(97 + y) + (x + 1);
}
