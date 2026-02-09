import React from "react";
import { mowMinutes } from "./mowTime.js";

export default function MowTime() {
  const tests = [
    { w: 5, l: 10, rate: 2 },
    { w: 20, l: 15, rate: 5 },
    { w: 8, l: 12, rate: 3 },
  ];

  return (
    <div>
      <h2>Lawn Mowing Time</h2>
      {tests.map((t, i) => (
        <p key={i}>
          {t.w}m x {t.l}m at {t.rate} m²/min ={" "}
          {mowMinutes(t.w, t.l, t.rate).toFixed(2)} minutes
        </p>
      ))}
    </div>
  );
}