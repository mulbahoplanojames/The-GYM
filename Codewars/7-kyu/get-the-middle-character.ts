export function getMiddle(s: string): string {
  const len = s.length;

  if (len % 2 === 0) {
    return s.slice(len / 2 - 1, len / 2 + 1);
  } else {
    return s.slice(Math.floor(len / 2), Math.floor(len / 2) + 1);
  }
}

console.log(getMiddle("james"));
console.log(getMiddle("jame"));
