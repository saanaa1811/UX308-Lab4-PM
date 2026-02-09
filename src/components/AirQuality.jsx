import React from "react";
import { airQuality } from "./airQuality.js";

export default function AirQuality() {
  const tests = [25, 75, 125, 175, 250, 350];

  return (
    <div>
      <h2>Air Quality (AQI)</h2>
      {tests.map((aqi, i) => (
        <p key={i}>
          AQI {aqi} = {airQuality(aqi)}
        </p>
      ))}
    </div>
  );
}