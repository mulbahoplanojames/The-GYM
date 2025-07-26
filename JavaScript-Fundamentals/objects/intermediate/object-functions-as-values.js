/*
Create an object calculator with methods: add, subtract, multiply, divide. Each should take two
numbers and return the result.
*/

const Calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
};

console.log(Calculator.add(10, 40));
console.log(Calculator.subtract(10, 40));
console.log(Calculator.multiply(10, 40));
console.log(Calculator.divide(10, 40));
