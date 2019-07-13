// tslint:disable:no-expression-statement
import test, { ExecutionContext, Macro } from 'ava';
import { emptyRange, interval, range } from '.';

const aRange = range(1, 10);

test('range has interval as an alias', t => {
  t.is(interval, range);
});

test('range has a start', t => {
  t.is(aRange.start, 1);
});

test('range has an end', t => {
  t.is(aRange.end, 10);
});

test('range has length', t => {
  t.is(aRange.length, 10);
  t.is(range(2, 10).length, 9);
});

test('range has toString()', t => {
  t.is(String(aRange), `[1,10]`);
});

test('range has isEmpty()', t => {
  t.false(aRange.isEmpty);
  t.false(range(10, 10).isEmpty);
  t.true(emptyRange.isEmpty);
});

test('range includes a number', t => {
  t.true(aRange.includes(1));
  t.true(aRange.includes(10));
  t.false(aRange.includes(0));
  t.false(aRange.includes(11));
});

test('range includes other range', t => {
  t.true(aRange.includes(range(1, 10)));
  t.true(aRange.includes(range(2, 10)));
  t.true(aRange.includes(range(1, 9)));

  t.false(aRange.includes(range(0, 10)));
  t.false(aRange.includes(range(1, 11)));
  t.false(aRange.includes(range(20, 40)));
});

test('range equals other range', t => {
  t.deepEqual(aRange, range(1, 10));
});

test('range behavior in float numbers', t => {
  t.false(range(6, 10).includes(5.999999));
  t.true(range(6, 10).includes(6.000001));

  t.true(range(6, 10).includes(9.9999));
  t.false(range(6, 10).includes(10.00000000001));
});

const iterateMacro: Macro = (
  t: ExecutionContext<{}>,
  elements: number[],
  iterate
) => {
  elements.forEach(n => {
    t.is(iterate.next().value, n);
  });

  t.true(iterate.next().done);
};

test(
  'range lazy iterates default step=1',
  iterateMacro,
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  aRange.step()
);
test(
  'range lazy iterates default step=4',
  iterateMacro,
  [1, 5, 9],
  aRange.step(4)
);

test('range toArray() default step=1', t => {
  t.deepEqual(aRange.toArray(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('range toArray() step=4', t => {
  t.deepEqual(aRange.toArray(4), [1, 5, 9]);
});

test('range defaults should start with 0', t => {
  t.is(range(10).start, 0);
});
