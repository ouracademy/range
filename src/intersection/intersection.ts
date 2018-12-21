import { interval } from '../factory';
import { Range } from '../range';

const max = Math.max;
const min = Math.min;

const instersection = (range: Range, otherRange: Range) =>
  interval(max(range.start, otherRange.start), min(range.end, otherRange.end));

export default instersection;
