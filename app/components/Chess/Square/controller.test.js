import * as SquareController from './controller';

describe('SquareController', () => {
  test('getSquareColor', () => {
    expect(
      SquareController.getSquareColor(0, 0),
    ).toBe(SquareController.LIGHT);

    expect(
      SquareController.getSquareColor(0, 1),
    ).toBe(SquareController.DARK);

    expect(
      SquareController.getSquareColor(1, 0),
    ).toBe(SquareController.DARK);

    expect(
      SquareController.getSquareColor(1, 1),
    ).toBe(SquareController.LIGHT);
  });

  test('getSquareName', () => {
    expect(
      SquareController.getSquareName(0, 0),
    ).toBe('a1');

    expect(
      SquareController.getSquareName(1, 0),
    ).toBe('b1');

    expect(
      SquareController.getSquareName(0, 1),
    ).toBe('a2');

    expect(
      SquareController.getSquareName(1, 1),
    ).toBe('b2');
  });
});
