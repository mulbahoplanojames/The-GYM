//Docs: == Function Return Values ==

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

interface User {
  name: string;
  age: number;
  address: {
    city: string;
    state: string;
  };
}

const returnUser = (): User => {
  return {
    name: "James",
    age: 12,
    address: {
      city: "Monrovia",
      state: "Fandell",
    },
  };
};

const printHello = () => {
  console.log("Hello, i am new here");
};

//Docs: == Function as a Type ==

const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

// let greet: Function;
let greet: () => void;
// let greet: (a: number, b: number) => number;
greet = () => {
  console.log("I am a ser");
};
// greet();

// greet = sum;

// Not passing the arguments of the sum function but it's not giving a compile time error
greet();

// greet = 100;

// let empty: never = "hello";

let unknownType: unknown;

unknownType = 100;
unknownType = "james";

let key = 0;
switch (key) {
  case 1:
    console.log("do something");
    break;

  default:
    console.log("no key found");
    break;
}
