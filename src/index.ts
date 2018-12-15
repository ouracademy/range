export class Range {
  constructor(public start: number, public end: number) {}

  public toString() {
    return `[${this.start},${this.end}]`;
  }

  get isEmpty() {
    return this.start >= this.end;
  }

  public includes(arg: number): boolean {
    return this.start <= arg && arg <= this.end;
  }
}

export const range = (start: number, end: number) => new Range(start, end);
