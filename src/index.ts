import { Range } from "./range";

interface RangeFactory {
  (start: number, end: number): Range;
  upTo(end: number): Range;
}

const createRangeFactory = (): RangeFactory => {
  const result = ((start: number, end: number) =>
    new Range(start, end)) as RangeFactory;
  result.upTo = (end: number) => new Range(Number.NEGATIVE_INFINITY, end);

  return result;
};

export const range = createRangeFactory();
export const interval = range;

/**
 * Use it as a special case pattern.
 */
export const emptyRange = range(1, 1);
