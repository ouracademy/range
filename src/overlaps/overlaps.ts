import { Range } from '../range';

const overlaps = (aRange: Range, otherRange: Range) =>
  otherRange.includes(aRange.start) || otherRange.includes(aRange.end);

export default overlaps;
