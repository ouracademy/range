export class Range {
  constructor(public start: number, public end: number) {}

  public toString(): string {
    return `[${this.start},${this.end}]`;
  }

  get isEmpty(): boolean {
    return this.start > this.end;
  }

  get length(): number {
    return this.end - this.start + 1;
  }

  public *iterate(step = 1): IterableIterator<number> {
    let i = this.start;
    while (this.includes(i)) {
      yield i;
      i += step;
    }
  }

  public toArray(step = 1): number[] {
    return [...this.iterate(step)];
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
