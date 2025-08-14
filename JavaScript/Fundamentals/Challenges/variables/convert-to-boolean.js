/*

2. Convert to Boolean

🎯 Difficulty: Easy
📂 Topic: Variables & Data Types

📜 Task:
Create a function that takes any value and converts it into its boolean equivalent. For example, 0 and "" should be false, while "Hello" and 42 should be true. This will help you understand JavaScript truthy and falsy values.

🧪 Example(s):

toBoolean(0) → false
toBoolean("Hello") → true

⛔ Constraints:

    Do not use Boolean() directly.

💡 Bonus:

    Solve using only comparison operators.
*/

const convertToBoolean = (value) => {
  return !!value;
};

console.log(convertToBoolean("Hello"));
console.log(convertToBoolean(0));
