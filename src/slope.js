export function slope(x1, y1, x2, y2) {
  const rise = y2 - y1;
  const run = x2 - x1;
  return rise / run;
}