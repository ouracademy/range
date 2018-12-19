import test from 'ava';
import { range } from '.';

test('upTo', t => {
  t.true(range.upTo(10).includes(10));
  t.true(range.upTo(10).includes(0));
  t.true(range.upTo(10).includes(-5));
  t.true(range.upTo(10).includes(Number.NEGATIVE_INFINITY));
});
