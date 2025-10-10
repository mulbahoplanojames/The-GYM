// Note : Use spread to create a new array: Copy [1, 2, 3] and add 4 at the end. Log the result.
const luckyNumbers = [1, 2, 3, 6, 7];
const spreadLucyNumbers = [...luckyNumbers, 4, 10];
console.log(spreadLucyNumbers);

// Note: Merge two arrays with spread: [1, 2] and [3, 4] into [1, 2, 3, 4]. Log it.
const primaryColors = ["red", "green", "blue"];
const secondaryColors = ["Purple", "Orange", "Pink"];
const colors = [...primaryColors, ...secondaryColors];
console.log(colors);

// Note: Use spread to find the max of [5, 2, 8, 1] with Math.max(...array). Log the result.
const randomNumbers = [5, 2, 8, 1, 9];
console.log(Math.max(...randomNumbers));

// Note: Clone an object with spread: {name: "Alice"} into a new object, then add {age: 30}. Log the clone.

const User = {
  name: "Alice",
};
const newPerson = { ...User, age: 30, nationality: "Liberian" };
console.log(newPerson);

// Note: Use rest in a function sum(...numbers) that adds all args. Call with 1, 2, 3 and log.

// const calculate = (numbers) => {
//     let sum =
//     return []
// }
