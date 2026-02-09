import { sqftToAcres } from "../src/sqftToAcres.js";

describe("testing sqftToAcres()", function () {
  it("43560 sqft -> 1 acre", function () {
    expect(sqftToAcres(43560)).toBeCloseTo(1, 5);
  });

  it("87120 sqft -> 2 acres", function () {
    expect(sqftToAcres(87120)).toBeCloseTo(2, 5);
  });

  it("21780 sqft -> 0.5 acres", function () {
    expect(sqftToAcres(21780)).toBeCloseTo(0.5, 5);
  });
});