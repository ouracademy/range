import { Range } from '../range';

/**
 * ### Example (es module)
 * ```js
 * import { range, isBefore } from '@ouracademy/range'
 * isBefore(range(0, 2), range(3, 7)) // true
 * isBefore(range(0, 5), range(3, 7)) // false
 * ```
 * @param aRange
 * @param otherRange
 */
export const isBefore = (aRange: Range, otherRange: Range) =>
  aRange.end <= otherRange.start;
