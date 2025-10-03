function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0;
  const sorted = [...arr].sort((a, b) => b - a);
  let sum = 0;

  //  for (let i = 0; i < sorted.length - 1; i++) {
  //    sum += sorted[i] - sorted[i + 1];
  //  }

  for (const [first, second] of sorted
    .slice(0, -1)
    .map((val, index) => [val, sorted[index + 1]])) {
    sum += first - second;
  }

  return sum;
}

console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));
console.log(sumOfDifferences([]));
console.log(sumOfDifferences([2]));
