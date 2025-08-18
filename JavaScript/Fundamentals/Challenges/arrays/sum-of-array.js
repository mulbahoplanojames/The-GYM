/* 
5. Sum of Array

🎯 Difficulty: Easy
📂 Topic: Arrays

📜 Task:
Write a function that takes an array of numbers and returns the sum of all its elements. You are not allowed to use the reduce() method, so you’ll need to use a loop or another approach.

🧪 Example(s):
sumArray([1, 2, 3]) → 6
sumArray([-1, 0, 1]) → 0

*/

const sumArray = (arr) => {
  let sum = 0;

  for (let element of arr) {
    sum += element;
  }

  return sum;
};

console.log(sumArray([1, 2, 3]));
