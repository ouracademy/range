import { range } from ".";
import overlaps from "./overlaps";

describe("overlaps()", () => {
  it("no overlaps", () => {
    expect(overlaps(range(1, 5), range(7, 12))).toBeFalsy();
    expect(overlaps(range(15, 20), range(7, 12))).toBeFalsy();
  });

  it("left", () => {
    expect(overlaps(range(1, 5), range(5, 12))).toBeTruthy();
    expect(overlaps(range(1, 7), range(5, 12))).toBeTruthy();
  });

  it("right", () => {
    expect(overlaps(range(12, 20), range(5, 12))).toBeTruthy();
    expect(overlaps(range(8, 20), range(5, 12))).toBeTruthy();
  });

  it("part of", () => {
    expect(overlaps(range(5, 12), range(5, 12))).toBeTruthy();
    expect(overlaps(range(4, 12), range(5, 12))).toBeTruthy();
    expect(overlaps(range(5, 10), range(5, 12))).toBeTruthy();
  });
});
