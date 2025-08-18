/*
10. Flatten Nested Array (1 level)

🎯 Difficulty: Intermediate
📂 Topic: Arrays

📜 Task:
Create a function that takes a nested array that’s only one level deep and flattens it into a single array. Do not use the built-in flat() method.

🧪 Example(s):
flattenOnce([1, [2, 3], [4]]) → [1, 2, 3, 4]
*/

const flattenOnce = (arr) => {
  const flat = [arr[0], ...arr[1], ...arr[2]];
  //   const flat = arr.flat();
  return flat;
};

flattenOnce([1, [2, 3], [4]]);
