//Docs: 1. Fix all type errors without changing the logic

class Logger {
  static logs: { timestamp: number; message: string }[] = [];

  addLog(message: string) {
    Logger.logs.push({ timestamp: Date.now(), message });
  }

  static clearLogs() {
    Logger.logs = [];
  }
}

const log1 = new Logger();
log1.addLog("First Log to be added");
const log2 = new Logger();
log2.addLog("second Log to be added");
const log3 = new Logger();
log3.addLog("third Log to be added");
console.log("=================================");

console.log(Logger.logs);

//Docs: 2. Type the `user` object and ensure proper autocompletion

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
const user: User = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};
function printUserInfo(u: User) {
  console.log(`${u.name} (${u.age}) - Admin: ${u.isAdmin}`);
}

printUserInfo(user);
console.log("=================================");

/*
 //Docs: 3. Create a generic function `wrapInArray` that returns an array containing the input value,
 maintaining its type. Usage:
*/

const wrapInArray = <T>(value: T): T[] => {
  return [value];
};

const result1 = wrapInArray(4);
const result2 = wrapInArray("hello");

console.log("Result 1", result1);
console.log("Result 2", result2);

console.log("=================================");

/** 
 * //Docs: 1. Create a union type `Shape` and implement the `getArea` function using type guards

```tsx
type Shape = // define Circle and Rectangle

function getArea(shape: Shape): number {
  // Use type guards to return correct area
}
```
*/

type Rectangle = { kind: "Rectangle"; width: number; height: number };
type Circle = { kind: "Circle"; radius: number };
type Shape = Rectangle | Circle;

function getArea(shape: Shape): number {
  if (shape.kind === "Rectangle") {
    return shape.width * shape.height;
  } else if (shape.kind === "Circle") {
    return Math.PI * shape.radius * shape.radius;
  }
  return 0;
}

getArea({ kind: "Circle", radius: 10 });
getArea({ kind: "Rectangle", width: 4, height: 5 });

console.log("=================================");

/** 
 * //Docs: 1. Update the function to accept a tuple and destructure it correctly

```tsx
function greet([firstName, lastName]: string[]) {
  return `Hello, ${firstName} ${lastName}`;
}

```
*/
type GreetTuple = [firstName: string, lastName: string];

function greet([firstName, lastName]: GreetTuple) {
  return `Hello, ${firstName} ${lastName}`;
}
console.log(greet(["Jane", "Doe"]));

/** 
 * Docs:1. ix typing issues and preserve return type inference

```tsx
const makeAdder = (x) => {
  return (y) => x + y;
};

const add5 = makeAdder(5);
const result = add5(10); // should be number

```
 */

type MakeAdderType = (y: number) => number;

const makeAdder = (x: number): MakeAdderType => {
  return (y) => x + y;
};

const add5: MakeAdderType = makeAdder(5);
const result = add5(10);
console.log(result);
