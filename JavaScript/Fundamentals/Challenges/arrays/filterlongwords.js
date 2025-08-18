/*
7. Filter Long Words

🎯 Difficulty: Easy
📂 Topic: Arrays

📜 Task:
Given an array of strings, return only the words that are longer than a given number n. This will give you practice using array filtering techniques.

🧪 Example(s):
filterLongWords(["apple", "hi", "banana"], 3) → ["apple", "banana"]
*/

const filterLongWords = (words, n) => {
  const newWords = words.filter((word) => word.length > n);

  return newWords;
};

console.log(filterLongWords(["hello", "world", "javascript", "coding"], 5));
console.log(filterLongWords(["hello", "world", "ice cream", "banana"], 6));
