/*
Directions:
Write a for (note: not a function) loop that prints out the factorial of the number 12:
A factorial is calculated by multiplying a number by all the numbers below it.
For instance, 3! or "3 factorial" is 3 \ *2 * 1 = 6
*/

let num = 5;
var fact = 1;
for (let x = 1; x <= num; x++) {
  fact *= x;
}

console.log(fact);
