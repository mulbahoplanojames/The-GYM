/* 
3. String to Number

🎯 Difficulty: Easy
📂 Topic: Variables & Data Types

📜 Task:
Write a function that takes a string containing a number (like "42") and returns it as an actual number (42). This will help reinforce type conversion concepts in JavaScript.

🧪 Example(s):

stringToNumber("123") → 123
stringToNumber("-5") → -5

⛔ Constraints:

    Do not use Number() or parseInt().
*/

const convertStringToNumber = (str) => {
  return +str;
};

console.log(convertStringToNumber("123"));
