import { Range } from '../range';

const centre = (aRange: Range) =>
  aRange.isEmpty ? undefined : (aRange.start + aRange.end) / 2;

export const midpoint = centre;
export default centre;
