const arrayStats = (stats) => {
  const sum = stats.reduce((acc, val) => acc + val, 0);
  const average = Number((sum / stats.length).toFixed(2));
  const min = Math.min(...stats);
  const max = Math.max(...stats);
  return {
    sum,
    average,
    min,
    max,
  };
};

// console.log(arrayStats([1, 2, 3, 4, 5]));

// note : Solution
const oddSquares = (params) => {
  const odds = params
    .filter((param) => param % 2 !== 0)
    .map((odd) => Math.pow(odd, 2));
  return odds;
};
// console.log(oddSquares([1, 2, 3, 4, 5, 6]));

// note: Solution

const productsList = [
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    inStock: true,
  },
  {
    name: "Running Shoes",
    price: 59.99,
    category: "Footwear",
    inStock: false,
  },
  {
    name: "Coffee Mug",
    price: 12.5,
    category: "Kitchen",
    inStock: true,
  },
  {
    name: "Notebook",
    price: 4.75,
    category: "Stationery",
    inStock: true,
  },
  {
    name: "Bluetooth Speaker",
    price: 45.0,
    category: "Electronics",
    inStock: false,
  },
];

const sortProducts = (products) => {
  return products.sort((a, b) => b.price - a.price);
};
// console.log(sortProducts(productsList));

// note : Return Calculation
const getCalc = (num1, num2) => {
  return [num1 + num2, num1 * num2, num1 - num2, num1 % num2];
};
const [addition, multiplication, subtraction, modulous] = getCalc(10, 20);
// console.log(`The Sum is ${addition}
// The product is ${multiplication}
// The difference is ${subtraction}
// The reminder is ${modulous}
// `);

// note: Arrow + Default Parameters
const greet = (name = "Guest") => {
  return `Hello ${name}!`;
};
// console.log(greet());

// note : Arrow + Template Literals

const getUserInfo = ({
  firstName = "Guest",
  lastName = "Guest",
  department = "No Department",
  rollNumber = "Not avaliable",
} = {}) => {
  const message = `Hi, Meet ${firstName} ${lastName} one of our best student from the department of ${department} with the roll number of ${rollNumber}`;
  return message;
};
// console.log(
//   getUserInfo({
//     firstName: "Wilma",
//     lastName: "William",
//     department: "Software Engineering",
//     rollNumber: "2023293940",
//   })
// );
// console.log(getUserInfo());

// note : Arrow + Array Map
const doubleNumber = (numbers) => {
  const double = numbers.map((number) => number * 2);
  return double;
};
// console.log(doubleNumber([2, 4, 6, 8, 10]));

// note: Arrow + Filter
const returnEvens = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};
// console.log(returnEvens([1, 2, 3, 4, 5, 6, 9, 11, 15, 12]));

// note : Arrow + Reduce;
const getTotal = (numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};
// console.log(getTotal([5, 10, 15, 20]));

// note : Arrow + Spread Operator
const returnMax = (...numbers) => {
  return `The Maximum number is ${Math.max(...numbers)}`;
};
console.log(returnMax(12, 4, 5, 6, 8, 9));
