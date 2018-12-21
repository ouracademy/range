// tslint:disable:no-expression-statement
import test from 'ava';

import { range } from '../factory';
import intersection from './intersection';

test('on no intersection get empty range', t => {
  t.true(intersection(range(1, 5), range(7, 12)).isEmpty);
  t.true(intersection(range(15, 20), range(7, 12)).isEmpty);
});

test('left', t => {
  t.deepEqual(intersection(range(1, 5), range(5, 12)), range(5, 5));
  t.deepEqual(intersection(range(1, 7), range(5, 12)), range(5, 7));
});

test('right', t => {
  t.deepEqual(intersection(range(12, 20), range(5, 12)), range(12, 12));
  t.deepEqual(intersection(range(8, 20), range(5, 12)), range(8, 12));
});

test('part of', t => {
  t.deepEqual(intersection(range(5, 12), range(5, 12)), range(5, 12));
  t.deepEqual(intersection(range(4, 12), range(5, 12)), range(5, 12));
  t.deepEqual(intersection(range(5, 10), range(5, 12)), range(5, 10));
});
