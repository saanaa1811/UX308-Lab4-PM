import { mowMinutes } from "../src/mowTime.js";

describe("testing mowMinutes()", function () {
  it("5x10 at 2 sqm/min -> 25 min", function () {
    expect(mowMinutes(5, 10, 2)).toBeCloseTo(25, 5);
  });

  it("20x15 at 5 sqm/min -> 60 min", function () {
    expect(mowMinutes(20, 15, 5)).toBeCloseTo(60, 5);
  });

  it("8x12 at 3 sqm/min -> 32 min", function () {
    expect(mowMinutes(8, 12, 3)).toBeCloseTo(32, 5);
  });
});