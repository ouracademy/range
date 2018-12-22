import test from 'ava';
import { emptyRange, range } from '../factory';
import centre, { midpoint } from './centre';

test('midpoint is an alias', t => {
  t.deepEqual(midpoint, centre);
});

test('on integer interval', t => {
  t.deepEqual(centre(range(1, 3)), 2);
  t.deepEqual(centre(range(1, 10)), 5.5);
});

test('on empty interval', t => {
  t.deepEqual(centre(emptyRange), undefined);
});
