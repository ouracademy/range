import { Range } from "./range";

interface RangeFactory {
  /**
   * Creates a closed range [0, end]
   */
  (end: number): Range;
  /**
   * Creates a closed range [start, end]
   */
  // tslint:disable-next-line:unified-signatures
  (start: number, end: number): Range;
  /**
   * Creates a range starting from -infinity
   * @param end
   */
  upTo(end: number): Range;
}

const createRangeFactory = (): RangeFactory => {
  const result = ((arg1: number, arg2: number) => {
    return arg2 ? new Range(arg1, arg2) : new Range(0, arg2);
  }) as RangeFactory;
  result.upTo = (end: number) => new Range(Number.NEGATIVE_INFINITY, end);

  return result;
};

export const range = createRangeFactory();
export const interval = range;

/**
 * Use it as a special case pattern.
 */
export const emptyRange = range(1, 1);
