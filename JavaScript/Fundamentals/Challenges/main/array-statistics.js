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
console.log(`The Sum is ${addition}
The product is ${multiplication}
The difference is ${subtraction}
The reminder is ${modulous} 
`);
