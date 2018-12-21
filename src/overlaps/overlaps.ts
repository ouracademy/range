import instersection from '../intersection/intersection';
import { Range } from '../range';

const overlaps = (aRange: Range, otherRange: Range) =>
  !instersection(aRange, otherRange).isEmpty;

export default overlaps;
