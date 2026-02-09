import { yee_ha } from "../src/yeeHa.js";

describe("testing yee_ha()", function () {
  it("Yee Ha (divisible by 3 and 7)", function () {
    expect(yee_ha(21)).toBe("Yee Ha");
  });

  it("Yee (divisible by 3 only)", function () {
    expect(yee_ha(9)).toBe("Yee");
  });

  it("Ha (divisible by 7 only)", function () {
    expect(yee_ha(14)).toBe("Ha");
  });

  it("Nada (not divisible by 3 or 7)", function () {
    expect(yee_ha(10)).toBe("Nada");
  });
});