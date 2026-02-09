import React from "react";
import { sqftToAcres } from "./sqftToAcres.js";

export default function SqftToAcres() {
  const tests = [
    { sqft: 43560 },
    { sqft: 87120 },
    { sqft: 21780 },
  ];

  return (
    <div>
      <h2>Square Feet → Acres</h2>
      {tests.map((t, i) => (
        <p key={i}>
          {t.sqft} sqft = {sqftToAcres(t.sqft).toFixed(4)} acres
        </p>
      ))}
    </div>
  );
}