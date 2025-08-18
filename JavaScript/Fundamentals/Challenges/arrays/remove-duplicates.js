/*
8. Remove Duplicates

🎯 Difficulty: Intermediate
📂 Topic: Arrays

📜 Task:
Write a function that takes an array and returns a new one with duplicate values removed, while keeping the first occurrence of each value.

🧪 Example(s):
removeDuplicates([1, 1, 2, 3, 2]) → [1, 2, 3]
*/

const removeDuplicates = (arr) => {
  const removeDuplicatesValues = new Set(arr);
  const newArr = Array.from(removeDuplicatesValues);
  return newArr;
};
console.log(removeDuplicates([1, 1, 2, 3, 2]));
