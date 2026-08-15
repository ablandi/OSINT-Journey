export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
