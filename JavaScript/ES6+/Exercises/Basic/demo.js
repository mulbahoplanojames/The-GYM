// console.log("num1", num1);
// console.log("num2", num2);

let num1 = 10;
var num2 = 20;

// console.log(calculateSquare(num2));

function calculateSquare(params) {
  let ans = params * params;
  return ans;
}

// setInterval(() => {
//   console.log(calculateSquare(num1));
// }, 1000);

var x = 5;

firstCall();
secondCall();
console.log(x);

function firstCall() {
  var x = 100;
  console.log("First: ", x);
}

function secondCall() {
  var x = 500;
  console.log("second: ", x);
}

const foods = [
  {
    name: "Rice",
    price: 20.23,
  },
];

foods.price = 50.89;
console.log(foods.price);

const company = Object.freeze({
  name: "ABC corp",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    zipcode: 95134,
  },
});

company.address.country = "Liberia";
console.log(company);

for (const i = 0; i < scores.length; i++) {
  // TypeError
  console.log(scores[i]);
}

// note: Just doing some testing
// function getClothing(isCold) {
//   if (isCold) {
//     var freezing = "Grab a jacket!";
//   } else {
//     var hot = "It’s a shorts kind of day.";
//     console.log(freezing);
//   }
// }

// function getClothing(isCold) {
//   if (isCold) {
//     const freezing = "Grab a jacket!";
//   } else {
//     const hot = "It’s a shorts kind of day.";
//     console.log(freezing);
//   }
// }

// getClothing(false);

const posts = [
  {
    title: "React Js",
    description: "I love react js",
    tags: ["React Js", "Javascript"],
  },
  {
    title: "Javascript",
    description:
      "Javascript is one of the best programming languages int the world",
    tags: ["programming", "Javascript"],
  },
];

// for (let post of posts) {
//   console.table(post);
// }

//

const colors = ["red", "blue", "green", "pruple", "orange"];
console.table(colors);

const [one, two, three, ...rest] = colors;

console.log(one, two, three, rest);

// let num1 = 34;
// let num2 = 56;

[num1, num2] = [num2, num1];

console.log(num1, num2);

const students = ["James", "Peter", "Abdalla", "Pac", "Oplano"];

const [name1, name2, name3, ...leave] = students;
console.log(name1, name2, name3, leave);
