"use strict";
/**
 * An interface in TypeScript is a way to define the shape of an object.

It tells TypeScript:

Any object of this type must have these properties (and possibly methods), with these specific types.

Think of an interface as a contract that objects must follow.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    makeSound() {
        console.log("HU HU HU");
    }
}
let numbers = [12, 3, 4, 5, 77, 8];
// numbers.push()
let a;
// a = numbers;
const names = [];
class Employees {
    empCode;
    name;
    constructor(code, name) {
        this.empCode = code;
        this.name = name;
    }
    getSalary(empCode) {
        return 20000;
    }
    getNeme() {
        console.log("object");
    }
}
let emp = new Employees(1, "Steve");
emp.getNeme();
