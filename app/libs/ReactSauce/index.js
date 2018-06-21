import * as R from 'ramda';

export const classes = R.pipe(
  R.filter(R.identity),
  R.keys,
  R.join(' '),
);
