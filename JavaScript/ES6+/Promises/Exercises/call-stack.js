// 1. Microtask Queue

const printName = () => {
  console.log("James Mulbah");
};

printName();

const promise1 = new Promise((resolve, reject) => {
  resolve("Microtask Queue 1 resolved");
});

promise1.then((message) => {
  console.log(message);
});

const addNumbers = (a, b) => {
  console.log("Adding numbers", a + b);
};

addNumbers(1, 2);

console.log("---------------------------------------------");

// 2. MacroTask Queue

const printGymMotion = () => {
  console.log("Gym Motion: Warm up");
};

printGymMotion();

setTimeout(() => {
  console.log("MacroTask Queue");
}, 0);

const getStudentName = () => {
  console.log("James Mulbah");
};

getStudentName();
