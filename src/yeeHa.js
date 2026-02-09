export function yee_ha(n) {
  const div3 = n % 3 === 0;
  const div7 = n % 7 === 0;

  if (div3 && div7) return "Yee Ha";
  if (div3) return "Yee";
  if (div7) return "Ha";
  return "Nada";
}