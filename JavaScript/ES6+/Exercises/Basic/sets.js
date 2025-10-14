const nameSet = new Set("james");
console.log(nameSet);

const numbers = [2, 3, 45, 6, 7, 7, 8];
const numberSet = new Set(numbers);
console.log(numberSet);

const fruits = new Set();
console.log(fruits);

// Note: add method
fruits.add("banana").add("apple").add("arange");
console.log(fruits);

// Note: foreach method
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Note: has method
console.log(fruits.has("apple"));

// Note: delete method
fruits.delete("apple");
console.log(fruits);

// Note: size property
console.log(fruits.size);

// Note: has method
fruits.keys();
console.log(fruits);

console.log(typeof fruits);

const chars = new Set();
chars.add("a").add("b").add("c").add("d").add("a");
console.log(chars);

// Note: Difference method

const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.difference(squares));
console.log(odds.intersection(squares));
console.log(odds.union(squares));
