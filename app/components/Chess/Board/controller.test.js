import * as BoardController from './controller';
import * as Square from '../Square/controller';

describe('BoardController', () => {
  test('arrangeSquares', () => {
    expect(
      BoardController.arrangeSquares(2, 2),
    ).toEqual([
      [
        {
          color: Square.LIGHT,
          name: 'b1',
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
          name: 'a2',
        },
      ],
    ]);
  });
});
