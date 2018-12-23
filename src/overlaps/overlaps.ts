import { intersection } from '../intersection';
import { Range } from '../range';

export const overlaps = (aRange: Range, otherRange: Range) =>
  !intersection(aRange, otherRange).isEmpty;
