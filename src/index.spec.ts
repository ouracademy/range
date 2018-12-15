import { range, Range } from "./index";

describe("Range", () => {
  const aRange = range(1, 10);

  it("has a start", () => {
    expect(aRange.start).toBe(1);
  });

  it("has an end", () => {
    expect(aRange.end).toBe(10);
  });

  it("has toString()", () => {
    expect(String(aRange)).toBe(`[1-10]`);
  });

  it("has isEmpty()", () => {
    expect(aRange.isEmpty).toBeFalsy();
    expect(range(10, 10).isEmpty).toBeTruthy();
  });

  it("includes", () => {
    expect(aRange.includes(1)).toBeTruthy();
    expect(aRange.includes(10)).toBeTruthy();
    expect(aRange.includes(0)).toBeFalsy();
    expect(aRange.includes(11)).toBeFalsy();
  });
});
