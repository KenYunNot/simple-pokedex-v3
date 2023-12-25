export function capitalize(s: string) {
  if (s.length === 0) throw new Error("String cannot be empty");
  return s.charAt(0).toUpperCase() + s.slice(1);
}