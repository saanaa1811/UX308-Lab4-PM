export function mowMinutes(widthM, lengthM, sqmPerMin) {
  const area = widthM * lengthM;
  return area / sqmPerMin;
}