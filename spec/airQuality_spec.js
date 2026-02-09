import { airQuality } from "../src/airQuality.js";

describe("testing airQuality()", function () {
  it("Good (0-50)", function () {
    expect(airQuality(0)).toBe("Good");
    expect(airQuality(50)).toBe("Good");
  });

  it("Moderate (51-100)", function () {
    expect(airQuality(51)).toBe("Moderate");
    expect(airQuality(100)).toBe("Moderate");
  });

  it("Unhealthy for Sensitive Groups (101-150)", function () {
    expect(airQuality(101)).toBe("Unhealthy for Sensitive Groups");
    expect(airQuality(150)).toBe("Unhealthy for Sensitive Groups");
  });

  it("Unhealthy (151-200)", function () {
    expect(airQuality(151)).toBe("Unhealthy");
    expect(airQuality(200)).toBe("Unhealthy");
  });

  it("Very Unhealthy (201-300)", function () {
    expect(airQuality(201)).toBe("Very Unhealthy");
    expect(airQuality(300)).toBe("Very Unhealthy");
  });

  it("Hazardous (300+)", function () {
    expect(airQuality(301)).toBe("Hazardous");
    expect(airQuality(500)).toBe("Hazardous");
  });
});
