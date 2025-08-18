/*
6. Reverse Array Without reverse()

🎯 Difficulty: Easy
📂 Topic: Arrays

📜 Task:
Create a function that returns a new array containing the same elements as the input array but in reverse order. You may not use the built-in .reverse() method, so you’ll need to do it manually.

🧪 Example(s):
reverseArray([1, 2, 3]) → [3, 2, 1]
*/

const reverseArray = (arr) => {
  let reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(arr[i], "ooo");
    reverseArr.push(arr[i]);
  }

  return reverseArr;
};

console.log(reverseArray([1, 2, 3]));
