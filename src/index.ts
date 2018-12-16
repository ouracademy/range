export class Range {
  constructor(public start: number, public end: number) {}

  public toString() {
    return `[${this.start},${this.end}]`;
  }

  get isEmpty() {
    return this.start >= this.end;
  }

  get length() {
    return this.end - this.start + 1;
  }

  public includes(arg: number | Range): boolean {
    return arg instanceof Range
      ? this.includesRange(arg)
      : this.includesElement(arg);
  }

  private includesElement(arg: number): boolean {
    return this.start <= arg && arg <= this.end;
  }

  private includesRange(arg: Range): boolean {
    return this.includes(arg.start) && this.includes(arg.end);
  }
}

export const range = (start: number, end: number) => new Range(start, end);
export const interval = range;

/**
 * Use it as a special case pattern.
 */
export const emptyRange = range(1, 1);
