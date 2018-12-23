import { interval } from '../factory';
import { Range } from '../range';

const max = Math.max;
const min = Math.min;

export const intersection = (range: Range, otherRange: Range) =>
  interval(max(range.start, otherRange.start), min(range.end, otherRange.end));
