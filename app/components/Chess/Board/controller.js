import R from 'ramda';
import * as SquareController from '../Square/controller';

export function arrangeSquares(cols, rows) {
  return R.times(x =>
    R.times(y => ({
      color: SquareController.getSquareColor(x, y),
    }), cols),
  rows)
    .reverse()
    .map((row, x) =>
      row.map((square, y) => ({
        ...square,
        name: SquareController.getSquareName(x, y),
      })),
    )
    .reverse();
}
