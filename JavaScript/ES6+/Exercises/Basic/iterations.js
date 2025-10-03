const numbers = [1, 2, 5, 6, 54, 67, 5, 43, 4, 5];
let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   //   console.log(numbers[i]);
//   sum += numbers[i];
// }
for (let number of numbers) {
  sum += number;
}
// console.log(`The Sum is ${sum}`);

// note: Spread Operetor
const universities = ["ULK", "ALU", "CMU", "UR"];
// console.log(`universities in Rwanda are : ${universities.join(", ")}`);
// console.log(...universities);

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const products = [...fruits, ...vegetables];
// console.log(...products);

function compare(a, b) {
  return a - b;
}
// console.log(compare(...[25, 6]));

//note: copying

let scores = [80, 70, 90];
let copiedScores = [...scores, 87, 23];
// console.log(scores);
// console.log(copiedScores);

// note : Rest peremeter
function average(...numbers) {
  if (numbers.length < 1) return 0;

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  let average = sum / numbers.length;
  return average;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
