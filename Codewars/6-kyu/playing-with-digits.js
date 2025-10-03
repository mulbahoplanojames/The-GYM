function digPow(n, p) {
  const digits = n.toString().split("");
  let sum = 0;
  for (let digit of digits) {
    sum += Math.pow(parseInt(digit), p++);
  }
  return Number.isInteger(sum / n) ? sum / n : -1;
}

console.log(digPow(89, 1)); // 1
console.log(digPow(46288, 3)); // 51
console.log(digPow(92, 1)); // -1
