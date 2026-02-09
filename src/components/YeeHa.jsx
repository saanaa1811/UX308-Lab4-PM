import React from "react";
import { yee_ha } from "./yeeHa.js";

export default function YeeHa() {
  const tests = [21, 9, 14, 10];

  return (
    <div>
      <h2>yee_ha</h2>
      {tests.map((n, i) => (
        <p key={i}>
          {n} → {yee_ha(n)}
        </p>
      ))}
    </div>
  );
}