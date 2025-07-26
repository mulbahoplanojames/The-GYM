/*
Merge two objects using Object.assign() and the spread operator. Show the result of both approaches.
*/

const ObjectOne = {
  firstName: "James",
  studentAge: "21",
};

const ObjectTwo = {
  name: "Wilam",
  age: "19",
};

// const combineObject = { ...ObjectOne, ...ObjectTwo };
const combineObject = Object.assign(ObjectOne, ObjectTwo);

console.log(combineObject);
