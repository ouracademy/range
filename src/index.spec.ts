import { emptyRange, interval, range } from "./index";

describe("Range", () => {
  const aRange = range(1, 10);

  it("has interval as an alias", () => {
    expect(interval).toBe(range);
  });

  it("has a start", () => {
    expect(aRange.start).toBe(1);
  });

  it("has an end", () => {
    expect(aRange.end).toBe(10);
  });

  it("has length", () => {
    expect(aRange.length).toBe(10);
    expect(range(2, 10).length).toBe(9);
  });

  it("has toString()", () => {
    expect(String(aRange)).toBe(`[1,10]`);
  });

  it("has isEmpty()", () => {
    expect(aRange.isEmpty).toBeFalsy();
    expect(range(10, 10).isEmpty).toBeTruthy();
    expect(emptyRange.isEmpty).toBeTruthy();
  });

  it("includes a number", () => {
    expect(aRange.includes(1)).toBeTruthy();
    expect(aRange.includes(10)).toBeTruthy();
    expect(aRange.includes(0)).toBeFalsy();
    expect(aRange.includes(11)).toBeFalsy();
  });

  it("includes other range", () => {
    expect(aRange.includes(range(1, 10))).toBeTruthy();
    expect(aRange.includes(range(2, 10))).toBeTruthy();
    expect(aRange.includes(range(1, 9))).toBeTruthy();

    expect(aRange.includes(range(0, 10))).toBeFalsy();
    expect(aRange.includes(range(1, 11))).toBeFalsy();
  });

  it("equals other range", () => {
    expect(aRange).toEqual(range(1, 10));
  });

  it("behavior in float numbers", () => {
    expect(range(6, 10).includes(5.999999)).toBeFalsy();
    expect(range(6, 10).includes(6.000001)).toBeTruthy();

    expect(range(6, 10).includes(9.9999)).toBeTruthy();
    expect(range(6, 10).includes(10.00000000001)).toBeFalsy();
  });

  describe("lazy iterates", () => {
    it("iterates default step=1", () => {
      const it = aRange.iterate();
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(n => {
        expect(it.next().value).toBe(n);
      });

      expect(it.next().done).toBeTruthy();
    });

    it("iterates step=4", () => {
      const it = aRange.iterate(4);
      [1, 5, 9].forEach(n => {
        expect(it.next().value).toBe(n);
      });

      expect(it.next().done).toBeTruthy();
    });
  });
});

describe("range defaults", () => {
  it("should start with 0", () => {
    expect(range(10).start).toBe(0);
  });
});

test("upTo", () => {
  expect(range.upTo(10).includes(10)).toBeTruthy();
  expect(range.upTo(10).includes(0)).toBeTruthy();
  expect(range.upTo(10).includes(-5)).toBeTruthy();
  expect(range.upTo(10).includes(Number.NEGATIVE_INFINITY)).toBeTruthy();
});

test("startingOn", () => {
  expect(range.startingOn(10).includes(10)).toBeTruthy();
  expect(range.startingOn(10).includes(10.0000001)).toBeTruthy();
  expect(range.startingOn(10).includes(Number.POSITIVE_INFINITY)).toBeTruthy();
});
