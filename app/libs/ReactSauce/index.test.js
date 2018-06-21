import * as ReactSauce from './';

describe('ReactSauce', () => {
  test('classes', () => {
    expect(
      ReactSauce.classes({
        a: undefined,
        b: 'foo',
        c: null,
        d: 'bar',
      }),
    ).toBe('b d');
  });
});
