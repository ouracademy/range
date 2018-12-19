import { Range } from '../range';

interface RangeFactory {
  /**
   * Creates a closed range [0, end]
   */
  (end: number): Range;

  /**
   * Creates a closed range [start, end]
   *
   * ### Example (es module)
   * ```js
   * import { range } from '@ouracademy/range'
   * console.log(range(2, 10))
   * ```
   *
   * @param start   or left.
   * @param end     or end
   * @returns       [start, end].
   * @anotherNote   See range(end), upTo(), startingOn().
   */
  // tslint:disable-next-line:unified-signatures
  (start: number, end: number): Range;
  /**
   * Creates a range starting from -infinity
   * [-infinity, end]
   * @param end
   */
  upTo(end: number): Range;
  /**
   * Creates a range ending at infinity
   * [start, infinity]
   * @param end
   */
  startingOn(start: number): Range;
}

const createRangeFactory = (): RangeFactory => {
  const result = (arg1: number, arg2: number) =>
    arg2 ? new Range(arg1, arg2) : new Range(0, arg2);

  result.upTo = (end: number) => new Range(-Infinity, end);
  result.startingOn = (start: number) => new Range(start, Infinity);

  return result as RangeFactory;
};

export const range = createRangeFactory();
export const interval = range;

/**
 * Use it as a special case pattern.
 */
export const emptyRange = range(1, 1);
