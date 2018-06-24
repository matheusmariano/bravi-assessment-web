import * as BoardController from './controller';
import * as Square from '../Square/controller';
import * as Piece from '../Piece/controller';

describe('BoardController', () => {
  describe('getCoordinatesFromNotation', () => {
    describe('A2 must point to (0, 1)', () => {
      expect(
        BoardController.getCoordinatesFromNotation('A2'),
      ).toEqual({
        x: 0,
        y: 1,
      });
    });

    describe('c2 must point to (2, 1)', () => {
      expect(
        BoardController.getCoordinatesFromNotation('c2'),
      ).toEqual({
        x: 2,
        y: 1,
      });
    });

    describe('j12 must point to (9, 11)', () => {
      expect(
        BoardController.getCoordinatesFromNotation('j12'),
      ).toEqual({
        x: 9,
        y: 11,
      });
    });
  });

  describe('decodePiecePosition', () => {
    test('Nb3 must point a white knight at (1, 2)', () => {
      expect(
        BoardController.decodePiecePosition('Nb3'),
      ).toEqual({
        x: 1,
        y: 2,
        piece: {
          color: Piece.WHITE,
          type: Piece.KNIGHT,
        },
      });
    });
  });

  describe('getPieceFromPosition', () => {
    const pieces = ['Nb3'];

    test('(1, 2) with Nb3 must point a white knight', () => {
      expect(
        BoardController.getPieceFromPosition(1, 2, pieces),
      ).toEqual({
        type: Piece.KNIGHT,
        color: Piece.WHITE,
      });
    });

    test('(2, 1) with Nb3 must point nothing', () => {
      expect(
        BoardController.getPieceFromPosition(2, 1, pieces),
      ).toBe(undefined);
    });
  });

  describe('decodeHighlightPosition', () => {
    test('A3 must point a white highlight at (0, 2)', () => {
      expect(
        BoardController.decodeHighlightPosition('A3'),
      ).toEqual({
        x: 0,
        y: 2,
        highlight: Piece.WHITE,
      });
    });

    test('b1 must point a black highlight at (1, 0)', () => {
      expect(
        BoardController.decodeHighlightPosition('b1'),
      ).toEqual({
        x: 1,
        y: 0,
        highlight: Piece.BLACK,
      });
    });
  });

  describe('getHighlightFromPosition', () => {
    const highlights = ['B3'];

    test('(1, 2) with B3 must point a white highlight', () => {
      expect(
        BoardController.getHighlightFromPosition(1, 2, highlights),
      ).toBe(Piece.WHITE);
    });

    test('(2, 1) with B3 must point nothing', () => {
      expect(
        BoardController.getHighlightFromPosition(2, 1, highlights),
      ).toBe(undefined);
    });
  });

  describe('arrangeSquares', () => {
    test('must arrange an empty 2x2 checkerboard', () => {
      expect(
        BoardController.arrangeSquares(2, 2),
      ).toEqual([
        [
          {
            color: Square.LIGHT,
            name: 'a2',
          },
          {
            color: Square.DARK,
            name: 'b2',
          },
        ],
        [
          {
            color: Square.DARK,
            name: 'a1',
          },
          {
            color: Square.LIGHT,
            name: 'b1',
          },
        ],
      ]);
    });

    test('must arrange a 3x3 checkerboard with pieces and highlights', () => {
      expect(
        BoardController.arrangeSquares(3, 3, ['Na3', 'nc3'], ['c1', 'A1']),
      ).toEqual([
        [
          {
            color: Square.LIGHT,
            name: 'a3',
            piece: {
              color: Piece.WHITE,
              type: Piece.KNIGHT,
            },
          },
          {
            color: Square.DARK,
            name: 'b3',
          },
          {
            color: Square.LIGHT,
            name: 'c3',
            piece: {
              color: Piece.BLACK,
              type: Piece.KNIGHT,
            },
          },
        ],
        [
          {
            color: Square.DARK,
            name: 'a2',
          },
          {
            color: Square.LIGHT,
            name: 'b2',
          },
          {
            color: Square.DARK,
            name: 'c2',
          },
        ],
        [
          {
            color: Square.LIGHT,
            name: 'a1',
            highlight: Piece.WHITE,
          },
          {
            color: Square.DARK,
            name: 'b1',
          },
          {
            color: Square.LIGHT,
            name: 'c1',
            highlight: Piece.BLACK,
          },
        ],
      ]);
    });
  });
});
