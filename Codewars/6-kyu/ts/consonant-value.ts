export function solve(s: string): number {
  return Math.max(
    ...s
      .split(/[aeiou]/)
      .map((sub) => [...sub].reduce((sum, c) => sum + c.charCodeAt(0) - 96, 0)),
  );
}

console.log(solve("zodiac"));
console.log(solve("chruschtschov"));
