// Note: Exercises

// Note: Write an arrow function called greet that takes a name as input and returns a string like "Hello, [name]!". Call it with your name and log the result.

const greet = (name = "Guest") => {
  return `Hello, i am ${name}`;
};
console.log(greet("Princess"));

// Note: Convert this traditional function to an arrow function: function add(a, b) { return a + b; }. Then use it to add 5 and 3, and log the result.
const add = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};
console.log(add(12, 4, 6, 8));

// Note: Create an arrow function multiply that takes an array of numbers and returns the product of all event elements (use reduce). Test with [2, 3, 4].
const multiply = (...numbers) => {
  let product = 1;
  for (let number of numbers) {
    if (number % 2 === 0) product *= number;
  }
  return product;
};
console.log(multiply(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Note : Write an arrow function filterEven that takes an array of numbers and returns only the even numbers using filter. Test with [1, 2, 3, 4, 5, 6].

const filterEven = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};
console.log(filterEven([1, 2, 3, 4, 5, 6]));

// Note: Using map, create an arrow function doubleStrings that takes an array of strings and returns each doubled (e.g., "hi" becomes "hihi"). Test with ["a", "b", "c"].

const doubleStrings = (wordChar) => {
  const doubled = wordChar.map((char) => char + char);
  return doubled;
};
console.log(doubleStrings(["a", "b"]));

// Note: Write an arrow function findUser that takes an array of objects (each with id and name) and a target ID, returning the matching object. Test with sample data: [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}].

const findUser = (users) => {
  const usersOfTheMonth = users.filter(
    (user) => user.name === "Oplano" || user.name === "Wilma"
  );
  return usersOfTheMonth;
};
console.log(
  findUser([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Oplano" },
    { id: 4, name: "Wilma" },
  ])
);

// Note: Create an arrow function sortDescending that sorts an array of numbers in descending order using sort. Test with [3, 1, 4, 1, 5].

const sortDescending = (numbers) => {
  //   let descending = [];
  //   for (let i = numbers.length - 1; i >= 0; i--) {
  //     descending.push(numbers[i]);
  //   }
  //   return descending;

  return numbers.sort((a, b) => b - a);
};
console.log(sortDescending([3, 1, 4, 1, 5]));

// Note: Write an arrow function sumWithCondition that takes an array and a threshold, returning the sum of numbers greater than the threshold. Test with [10, 5, 15, 3] and threshold 7.

const sumWithCondition = (numbers, threshold) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum > threshold ? sum : threshold;
};
console.log(sumWithCondition([10, 5, 15, 3], 7));
