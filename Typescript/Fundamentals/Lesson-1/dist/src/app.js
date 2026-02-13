"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* //Note: ==== Codewar practice ====
8 kyu: Third Angle of a Triangle
*/
const otherAngle = (a, b) => {
    return 180 - (a + b);
};
console.log(otherAngle(30, 60));
console.log(otherAngle(60, 60));
console.log(otherAngle(43, 78));
console.log("------------------------------");
/* //Note: ==== Codewar practice ====
7 kyu: Sum of odd numbers
*/
function rowSumOddNumbers(n) {
    // your code here
    return Math.pow(n, 3);
}
console.log(rowSumOddNumbers(13));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(19));
console.log(rowSumOddNumbers(41));
console.log(rowSumOddNumbers(42));
console.log(rowSumOddNumbers(74));
console.log("------------------------------");
/* //Note: ==== Codewar practice ====
 6 kyu Sum of Digits / Digital Root
*/
const digitalRoot = (n) => {
    if (n === 0)
        return 0;
    return 1 + ((n - 1) % 9);
};
console.log(digitalRoot(16));
console.log(digitalRoot(456));
