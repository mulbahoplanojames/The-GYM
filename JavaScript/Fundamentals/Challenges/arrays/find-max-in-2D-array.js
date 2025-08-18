/*
9. Find Max in 2D Array

🎯 Difficulty: Intermediate
📂 Topic: Arrays

📜 Task:
Given a two-dimensional array (an array of arrays), return the largest number found in the entire structure.

🧪 Example(s):
findMax([[1, 2], [3, 4]]) → 4
*/

const findLargestInToDimensionalArray = (twoDArray) => {
  // spread all of the elements of the array
  // sort them
  // use the Math.max or just get the last index from the sorted array

  const spreadCloneArr = [...twoDArray[0], ...twoDArray[1]];
  const sortedSpreadCloneArr = spreadCloneArr.sort((a, b) => a - b);
  const max = Math.max(...sortedSpreadCloneArr);
  console.log("max", max);
};

const arr2 = [
  [17, 2, 4, 5, 6, 7],
  [89, 5, 3],
];

findLargestInToDimensionalArray(arr2);
