import test from 'ava';
import { range } from '.';

test('startingOn', t => {
  t.true(range.startingOn(10).includes(10));
  t.true(range.startingOn(10).includes(10.0000001));
  t.true(range.startingOn(10).includes(Number.POSITIVE_INFINITY));
});
