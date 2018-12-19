// tslint:disable:no-expression-statement
import test from 'ava';

import { range } from '../factory';
import overlaps from './overlaps';

test('no overlaps', t => {
  t.false(overlaps(range(1, 5), range(7, 12)));
  t.false(overlaps(range(15, 20), range(7, 12)));
});

test('left', t => {
  t.true(overlaps(range(1, 5), range(5, 12)));
  t.true(overlaps(range(1, 7), range(5, 12)));
});

test('right', t => {
  t.true(overlaps(range(12, 20), range(5, 12)));
  t.true(overlaps(range(8, 20), range(5, 12)));
});

test('part of', t => {
  t.true(overlaps(range(5, 12), range(5, 12)));
  t.true(overlaps(range(4, 12), range(5, 12)));
  t.true(overlaps(range(5, 10), range(5, 12)));
});
