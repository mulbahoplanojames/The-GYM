/*
Write a class Animal and instantiate objects. Then create a similar structure using plain objects.
Compare the use cases of each.
*/

const Sdtudent = {
  name: "james",
  age: 30,
};

Object.freeze(Sdtudent);

Sdtudent.name = "Paul";

console.log(Object.entries(Sdtudent));

let x = this;

console.log(x);
