import * as BoardController from './controller';

describe('BoardController', () => {
  test('getSquareColor', () => {
    expect(
      BoardController.getSquareColor(0, 0),
    ).toBe(BoardController.LIGHT);

    expect(
      BoardController.getSquareColor(0, 1),
    ).toBe(BoardController.DARK);

    expect(
      BoardController.getSquareColor(1, 0),
    ).toBe(BoardController.DARK);

    expect(
      BoardController.getSquareColor(1, 1),
    ).toBe(BoardController.LIGHT);
  });

  test('getSquareName', () => {
    expect(
      BoardController.getSquareName(0, 0),
    ).toBe('a1');

    expect(
      BoardController.getSquareName(0, 1),
    ).toBe('a2');

    expect(
      BoardController.getSquareName(1, 0),
    ).toBe('b1');

    expect(
      BoardController.getSquareName(1, 1),
    ).toBe('b2');
  });

  test('getSquares', () => {
    expect(
      BoardController.getSquares(2, 2),
    ).toEqual([
      [
        {
          color: BoardController.LIGHT,
          name: 'b1',
        },
        {
          color: BoardController.DARK,
          name: 'b2',
        },
      ],
      [
        {
          color: BoardController.DARK,
          name: 'a1',
        },
        {
          color: BoardController.LIGHT,
          name: 'a2',
        },
      ],
    ]);
  });
});
