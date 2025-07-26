/*
Write a function deepEqual(obj1, obj2) that checks whether two objects are deeply equal in
value (not just references).
*/

function deepEqual(Obj1, Obj2) {
  if (Obj1 === Obj2) {
    return true;
  }
  return false;
}

const Obj1 = {
  name: "james",
  age: 32,
};

const Obj3 = {
  name: "james",
  age: 32,
};

const Obj2 = Obj1;

console.log(deepEqual(Obj1, Obj3));
