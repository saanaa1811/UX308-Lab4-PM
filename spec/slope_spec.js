import { slope } from "../src/slope.js";

describe("testing slope()", function () {
  it("(0,0) to (2,2) -> 1", function () {
    expect(slope(0, 0, 2, 2)).toBeCloseTo(1, 5);
  });

  it("(0,0) to (4,2) -> 0.5", function () {
    expect(slope(0, 0, 4, 2)).toBeCloseTo(0.5, 5);
  });

  it("(1,5) to (3,1) -> -2", function () {
    expect(slope(1, 5, 3, 1)).toBeCloseTo(-2, 5);
  });
});