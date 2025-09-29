function solve(arr) {
  return arr.filter((num, i) => arr.lastIndexOf(num) === i);
}

console.log(solve([3, 4, 4, 3, 6, 3])); // [4,6,3]
console.log(solve([1, 2, 1, 2, 1, 2, 3])); // [1,2,3]

let name;
const name1 = "Oplan";
