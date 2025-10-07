function reject(array, predicate) {
  return array.filter((ele) => !predicate(ele));
}

console.log(reject(["a", "b", 3, "d"], (x) => typeof x === "number"));
console.log(reject(["a", "b", 3, "d"], (x) => typeof x === "string"));
console.log(reject([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0));
