function persistence(num) {
  let count = 0;

  // keep looping while num has more than 1 digit
  while (num >= 10) {
    // multiply all digits together
    num = num
      .toString()
      .split("")
      .reduce((acc, digit) => acc * +digit, 1);

    count++;
  }

  return count;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
console.log(persistence(25));
