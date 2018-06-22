import R from 'ramda';
import * as SquareController from '../Square/controller';
import * as Str from '../../../libs/Sauce/string';
import { WHITE, BLACK, KNIGHT } from '../Piece/controller';

export function getCoordinatesFromNotation(notation) {
  const values = notation.match(/^([A-Za-z+])(\d+)$/).slice(1);

  return {
    x: values[1] - 1,
    y: values[0].toLowerCase().charCodeAt(0) - 97,
  };
}

export function decodePiecePosition(notation) {
  const values = notation.match(/^([A-Za-z])(\w+)$/).slice(1);
  const coordinates = getCoordinatesFromNotation(values[1]);

  return {
    ...coordinates,
    piece: {
      type: KNIGHT,
      color: Str.isUppercase(values[0]) ? WHITE : BLACK,
    },
  };
}

export function getPieceFromPosition(x, y, pieces) {
  return R.pipe(
    R.map(decodePiecePosition),
    R.find(R.whereEq({ x, y })),
    R.path(['piece']),
  )(pieces);
}

export function decodeHighlightPosition(notation) {
  const values = notation.match(/^([A-Za-z])(?:\d+)$/).slice(0);
  const coordinates = getCoordinatesFromNotation(values[0]);

  return {
    ...coordinates,
    highlight: Str.isUppercase(values[1]) ? WHITE : BLACK,
  };
}

export function getHighlightFromPosition(x, y, highlights) {
  return R.pipe(
    R.map(decodeHighlightPosition),
    R.find(R.whereEq({ x, y })),
    R.path(['highlight']),
  )(highlights);
}

export function arrangeSquares(cols, rows, pieces = [], highlights = []) {
  return R.times(y =>
    R.times(x => ({
      color: SquareController.getSquareColor(x, y),
    }), cols)
      .reverse(),
  rows)
    .map((row, y) =>
      row.map((square, x) => {
        const piece = getPieceFromPosition(x, y, pieces);
        const highlight = getHighlightFromPosition(x, y, highlights);

        const result = {
          ...square,
          name: SquareController.getSquareName(x, y),
        };

        if (piece) {
          result.piece = piece;
        }

        if (highlight) {
          result.highlight = highlight;
        }

        return result;
      }),
    )
    .reverse();
}
