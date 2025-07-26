/*
GivenCompare Two Numbers
Task: Take two numbers as input and use if-else to determine which one is larger, or if they are equal.
Print a message with the result.
*/

const num1 = 6;
const num2 = 6;

if (num1 > num2) {
  console.log(`num1: ${num1} is larger then num2: ${num2}`);
} else if (num1 === num2) {
  console.log(`${num1} is equal to ${num2}`);
} else {
  console.log(`num2: ${num2} is larger then num1:${num1}`);
}
