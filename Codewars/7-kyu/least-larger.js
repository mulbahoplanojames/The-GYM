function leastLarger(a, i) {
  const target = a[i];
  let minLarger = Infinity;
  let result = -1;

  for (let j = 0; j < a.length; j++) {
    if (a[j] > target && a[j] < minLarger) {
      minLarger = a[j];
      result = j;
    }
  }

  return result;
}

console.log(leastLarger([4, 1, 3, 5, 6], 0));
