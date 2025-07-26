/*
Grade Calculator
Task:Write a function that takes a score from 0–100 and returns a grade based on the following:

A (90–100)
B (80–89)
C (70–79)
D (60–69)
F (<60)
✅ Edge case: Handle values outside the 0–100 range.
*/

const grade = 60;

if (grade < 0 || grade > 100) {
  console.log("Please enter a valiad grade between 0 and 100");
} else if (grade >= 90 && grade <= 100) {
  console.log("A");
} else if (grade >= 80 && grade <= 89) {
  console.log("B");
} else if (grade >= 70 && grade <= 79) {
  console.log("C");
} else if (grade >= 60 && grade <= 69) {
  console.log("D");
} else {
  console.log("F");
}
