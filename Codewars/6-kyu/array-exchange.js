function exchangeWith(a, b) {
  // 1. Create temporary copies of the reversed versions
  // I need these because if i modify 'a' first, i lose its data before 'b' can use it.
  const reversedA = [...a].reverse();
  const reversedB = [...b].reverse();

  // 2. Clear 'a' and inject reversed 'b'
  // .splice(start, deleteCount, ...items)
  a.splice(0, a.length, ...reversedB);

  // 3. Clear 'b' and inject reversed 'a'
  b.splice(0, b.length, ...reversedA);
}
