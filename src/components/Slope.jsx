import React from "react";
import { slope } from "./slope.js";

export default function Slope() {
  const tests = [
    { x1: 0, y1: 0, x2: 2, y2: 2 },
    { x1: 0, y1: 0, x2: 4, y2: 2 },
    { x1: 1, y1: 5, x2: 3, y2: 1 },
  ];

  return (
    <div>
      <h2>Slope</h2>
      {tests.map((t, i) => (
        <p key={i}>
          ({t.x1},{t.y1}) → ({t.x2},{t.y2}) slope ={" "}
          {slope(t.x1, t.y1, t.x2, t.y2).toFixed(4)}
        </p>
      ))}
    </div>
  );
}