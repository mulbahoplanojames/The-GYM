const employee: readonly [string, number, boolean] = ["James", 20, true];
// employee.push("")

const spreadTuple: [string, number, ...number[]] = ["james", 12, 90, 89, 76];
const optionalTuple: [number, number, number, number?] = [23, 234, 23];
const nameingTuple: [id: number, name: string] = [12, "james"];

let click: "click";
// click = "jas"

type Personal = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type Candidate = Personal & Contact;

// How do you make a tuple immutable ?

//     What are named tuple elements ?

//     When should you use a tuple instead of an array ?

//     How are string enums different from numeric enums ?

//     When designing a scalable frontend application, when would you choose enum over union types?

enum Role {
  ADMIN,
  USER,
  STAFF,
}
