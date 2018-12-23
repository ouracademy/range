import test from 'ava';
import { range } from '../factory';
import { isBefore } from './is-before';

test('is before or adjacent', t => {
  t.true(isBefore(range(0, 2), range(3, 7)));
  t.false(isBefore(range(0, 5), range(3, 7)));
});
