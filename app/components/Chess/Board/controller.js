import R from 'ramda';
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
  return String.fromCharCode(97 + x) + (y + 1);
}

export function getSquares(cols, rows) {
  return R.times(x =>
    R.times(y => ({
      color: getSquareColor(x, y),
    }), cols),
  rows)
    .reverse()
    .map((row, x) =>
      row.map((square, y) => ({
        ...square,
        name: getSquareName(x, y),
      })),
    )
    .reverse();
}
