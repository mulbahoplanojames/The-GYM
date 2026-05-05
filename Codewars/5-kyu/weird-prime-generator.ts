function gcd(a: number, b: number): number {
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

// a(1) = 7, a(n) = a(n-1) + gcd(n, a(n-1))
// g(n) = a(n) - a(n-1) = gcd(n, a(n-1)), with a 1 prepended at head
// So g = [1, gcd(2,7), gcd(3,8), gcd(4,9), ...]

export function countOnes(n: number): number {
  let a = 7;
  let ones = 1; // the prepended 1 at head of g
  for (let i = 2; i <= n; i++) {
    const g = gcd(i, a);
    if (g === 1) ones++;
    a += g;
  }
  return ones;
}

export function maxPn(n: number): number {
  const isPrime = (x: number): boolean => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  let a = 7;
  let seenPrimes = new Set<number>();
  let primes: number[] = [];
  let i = 2;

  while (primes.length < n) {
    const g = gcd(i, a);
    a += g;
    // g > 1 and prime and not seen before
    if (g > 1 && isPrime(g) && !seenPrimes.has(g)) {
      seenPrimes.add(g);
      primes.push(g);
    }
    i++;
  }

  return Math.max(...primes);
}

export function anOverAverage(n: number): number {
  let a = 7;
  let sum = 0;
  let count = 0;
  let i = 2;

  while (count < n) {
    const g = gcd(i, a);
    a += g;
    if (g !== 1) {
      // a is now a(i), ratio is a(i) / i
      sum += a / i;
      count++;
    }
    i++;
  }

  return Math.floor(sum / n);
}
