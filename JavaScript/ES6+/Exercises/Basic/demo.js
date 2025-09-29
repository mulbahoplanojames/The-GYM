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
