import { Range } from '../range';

/**
 * ### Example (es module)
 * ```js
 * import { centre, range, emptyRange } from '@ouracademy/range'
 * centre(range(1, 3)) // 2
 * centre(range(1, 10)) // 5.5
 * centre(emptyRange) // undefined (empty intervals doesn't support this concept)
 * ```
 * @param aRange
 * @see midpoint (as an alias)
 */
const centre = (aRange: Range) =>
  aRange.isEmpty ? undefined : (aRange.start + aRange.end) / 2;

export const midpoint = centre;
export default centre;
