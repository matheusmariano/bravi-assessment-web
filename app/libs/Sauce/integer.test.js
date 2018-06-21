import * as Int from './integer';

describe('Integer', () => {
  test('isEven', () => {
    expect(
      Int.isEven(2),
    ).toBeTruthy();

    expect(
      Int.isEven(1),
    ).toBeFalsy();
  });

  test('isOdd', () => {
    expect(
      Int.isOdd(1),
    ).toBeTruthy();

    expect(
      Int.isOdd(2),
    ).toBeFalsy();
  });
});
