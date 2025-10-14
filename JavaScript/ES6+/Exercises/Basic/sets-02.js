// Note : using arrays

const points = [10, 3, 6, 10, 3, 5, 7, 9, 4];
const uniquePoints = [];
for (point of points) {
  if (!uniquePoints.includes(point)) {
    uniquePoints.push(point);
  }
}
// console.log(uniquePoints);

// Note:using sets
const uniqueSetPoints = new Set();
for (point of points) {
  uniqueSetPoints.add(point);
}
// console.log(uniqueSetPoints);

// Note : Exercise 2 Find the first duplicate and add it to a set
const randomNumbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];
const seenNumbers = new Set();

for (let number of randomNumbers) {
  if (seenNumbers.has(number)) {
    console.log(number);
  }

  seenNumbers.add(number);
}
// console.log(seenNumbers);

// Note: Exercise 3

const items = [
  {
    name: "Banana",
    quantity: 1,
    price: 1.95,
  },
  {
    name: "Apple",
    quantity: 3,
    price: 1.45,
  },
  {
    name: "Banana",
    quantity: 1,
    price: 1.95,
  },
  {
    name: "Candy",
    quantity: 7,
    price: 1.2,
  },
  {
    name: "Orange",
    quantity: 7,
    price: 1.2,
  },
];

const results = [];

const duplicates = new Set();

for (let item of items) {
  if (duplicates.has(item.name)) {
    continue;
  }

  results.push(item);
  duplicates.add(item.name);
}

console.log(results);

let student1 = { name: "James", age: 26, gender: "male" };
let student2 = { name: "Julia", age: 27, gender: "female" };
let student3 = { name: "Richard", age: 31, gender: "male" };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);

// roster.forEach((element) => {
//   console.log(element);
// });
