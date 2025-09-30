// note: Array Destructuring

// note: exercise 1

const countries = ["Liberia", "Rwanda", "South Sudan", "Nigeria", "Uganda"];
const [country1, country2, country3, country4, ...rest] = countries;
// console.log(country1, country2, country3, country4, rest);
// note : Extract specific items from an array of objects using destructuring.
const users = [
  {
    name: "James",
    age: 23,
    address: {
      city: "Kigali",
      country: "Rwanda",
    },
  },
  {
    name: "Solomon",
    age: 17,
    address: {
      city: "Kampala",
      country: "Uganda",
    },
  },
  {
    name: "Abdalla",
    age: 20,
    address: {
      city: "Juba",
      country: "South Sudan",
    },
  },
];

// for (const {
//   age,
//   name,
//   address: { city, state },
// } of users) {
//   console.log(`Hello, i am ${name} from ${city} and i am ${age} years old`);
// }

// note: Swap two numbers using array destructuring.
let number1 = 10;
let number2 = 5;
[number1, number2] = [number2, number1];
// console.log(
//   `After Destructuring number-1 becomes ${number1} while number-2 becomes ${number2}`
// );

// note: Skip the 2nd element and extract the 1st and 3rd from an array of fruits.
const skipCountries = ["Liberia", "Rwanda", "South Sudan", "Nigeria", "Uganda"];
const [first, , third] = skipCountries;
// console.log(first, third);

// note: Extract the first value of an array into a variable and the rest into another array.
const [firstChild, ...others] = skipCountries;
// console.log(firstChild, others);

// note: Destructure a numbers array to get only the last value.
const numbers = [2, 3, 4, 5, 6, 64, 3, 2];
// const [lastValue] = [numbers.at(-1)];
const { [numbers.length - 1]: lastValue } = numbers;
// console.log(lastValue);

// note : Extract the first three numbers from an array and store the rest separately.
const [one, two, three, ...remining] = numbers;
// console.log("Output", one, two, three, remining);

// note: Use default values when destructuring an array with missing elements.
const jobs = ["Teacher", "Lawyer", "Developer", "Doctor"];
const [p1, p2, p3, p4, p5 = "Unenployed"] = jobs;
// console.log(p1, p2, p3, p4, p5);

// note: Swap values of three variables in a single line using array destructuring.
let english = 89;
let biology = 90;
let physics = 78;
[english, biology, physics] = [biology, physics, english];
// console.log("After", biology, physics, english);

// note: Destructure a 2D array (matrix) into separate variables.
const schools = [
  ["ULK", "ALU", "CMU"],
  ["UK", "Trinity", "Auca"],
];
const [SchoolOne, SchoolTwo] = schools;
const [s1, s2] = SchoolOne;
// console.log(SchoolOne, SchoolTwo);
// console.log(s1, s2);

// note : Destructure an array returned from a function into separate variables.
const returnArray = () => {
  const jobs = ["Teacher", "Lawyer", "Developer", "Doctor"];
  return jobs;
};
const newJobs = returnArray();
// console.log(returnArray());
// console.log(newJobs);
const [a, b, c, d, e = "Unenployed"] = newJobs;
console.log(`Output: ${a} ${b} ${c} ${d} ${e}`);

// note : Use destructuring in a loop to directly access array elements.

const jobs1 = ["Teacher", "Lawyer", "Developer", "Doctor"];
// for (let [job] of jobs1) {
//   console.log(job);
// }

// ====================================================================================

//Todo: Object

// note : Extract name and age from a simple user object.

const myUser = {
  name: "james",
  age: 30,
  skills: ["HTML", "CSS", "JS"],
};
const { name, age } = myUser;
// console.log(name, age);

// note : Destructure an object and rename one property (e.g., name → fullName).
const employees1 = {
  name: "james",
  country: "liberia",
  skills: ["HTML", "CSS", "JS"],
};

const { name: firstName, country } = employees1;
