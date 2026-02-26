/**
 * An interface in TypeScript is a way to define the shape of an object.

It tells TypeScript:

Any object of this type must have these properties (and possibly methods), with these specific types.

Think of an interface as a contract that objects must follow.
 */

interface User {
  name: string;
  readonly age: number;
  add: (num1: number, num2: number) => number;
}

interface Person extends User {
  address: {
    city: string;
    country: string;
  };
}

interface Animal {
  makeSound(): void;
}

class Dog implements Animal {
  makeSound(): void {
    console.log("HU HU HU");
  }
}

let numbers: ReadonlyArray<number> = [12, 3, 4, 5, 77, 8];
// numbers.push()
let a: number[];
// a = numbers;

const names: string[] = [];

interface IPerson {
  name: string;
  gender: string;
}

interface IEmployee extends IPerson {
  empCode: number;
}

// const Employees: IEmployee = {
//   name: "james",
//   gender: "male",
//   empCode: 1234,
// };

interface IEmployees {
  empCode: number;
  name: string;
  getSalary: (empCode: number) => number;
}

class Employees implements IEmployees {
  empCode: number;
  name: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.name = name;
  }

  getSalary(empCode: number): number {
    return 20000;
  }

  getNeme() {
    console.log("object");
  }
}

let emp = new Employees(1, "Steve");
emp.getNeme();
