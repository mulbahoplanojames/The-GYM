const names = ["James", "Abdalla", "Adwok", "Stephen"];
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const printNames = names.map((name) => console.log(name));
const b = materials.map((material) => material.length);
b.push("Boron");
// console.log(b);
// console.log(materials);

const addNumbers = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};
// console.log(addNumbers(1, 4, 6, 7, 8));

const testingOne = ([a, b] = [20, 45]) => {
  return [a + b, a - b, a * b];
};

const [add, subtract, multiply] = testingOne();
console.log(add, subtract, multiply);

function argTesting(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

const Person = {
  name: "James",
  age: 20,
  talk() {
    console.log(`Hello, I am ${this.name} and i am ${this.age} years old`);
  },
  // Not good to use arrow functions as mothods of objects
  greet: () => {
    console.log(`hello, i am ${this.name}`);
  },
};

// let me = Person.talk();
// let him = Person.greet();

const createSundae = ({ scoops = 1, toppings = ["Hot Fudge"] } = {}) => {
  const scoopText = scoops === 1 ? "scoop" : "scoops";
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(" and ")} toppings.`;
};
// console.log(typeof createSundae);
// console.log(createSundae instanceof Function);
// console.log(createSundae());

const sortArry = (arr) => {
  return arr.sort((a, b) => b - a);
};
const filterArry = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
// console.log(`Filter: ${filterArry([1, 2, 3, 4, 5, 6, 7, 8, 9])}`);
// console.log(sortArry([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// const returningTest = (fruits) => fruits.map((fruit) => fruit.toLowerCase());
const returningTest = (fruits) => {
  console.log(fruits);
  for (const fruit of fruits) {
    console.log(fruit);
    // return fruit;
  }
};
const fruits = ["Banana", "Apple", "Orange", "Carrot"];
console.log(returningTest(fruits));
