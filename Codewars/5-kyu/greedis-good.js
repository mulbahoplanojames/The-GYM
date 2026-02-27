export function score(dice) {
  let total = 0;

  // Create frequency counter for values 1–6
  const freq = Array(7).fill(0);

  // Count occurrences (does NOT modify input array)
  for (const value of dice) {
    freq[value]++;
  }

  // Handle triplets first
  for (let i = 1; i <= 6; i++) {
    if (freq[i] >= 3) {
      if (i === 1) {
        total += 1000;
      } else {
        total += i * 100;
      }
      freq[i] -= 3; // remove counted dice
    }
  }

  // Handle remaining singles
  total += freq[1] * 100;
  total += freq[5] * 50;

  return total;
}

score([5, 1, 3, 4, 1]);
score([1, 1, 1, 3, 1]);
score([2, 4, 4, 5, 4]);
