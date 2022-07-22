export function getFullYear(date) {
  const fullYear = new Date(date);
  return fullYear.getFullYear();
}

export function getFullDate(date) {
  const fullYear = new Date(date);
  return fullYear.toDateString();
}
