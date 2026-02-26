"use strict";
//Docs: 1. Fix all type errors without changing the logic
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    static logs = [];
    addLog(message) {
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
const user = {
    name: "Alice",
    age: 30,
    isAdmin: false,
};
function printUserInfo(u) {
    console.log(`${u.name} (${u.age}) - Admin: ${u.isAdmin}`);
}
printUserInfo(user);
console.log("=================================");
/*
 //Docs: 3. Create a generic function `wrapInArray` that returns an array containing the input value,
 maintaining its type. Usage:
*/
const wrapInArray = (value) => {
    return [value];
};
const result1 = wrapInArray(4);
const result2 = wrapInArray("hello");
console.log("Result 1", result1);
console.log("Result 2", result2);
console.log("=================================");
function getArea(shape) {
    if (shape.kind === "Rectangle") {
        return shape.width * shape.height;
    }
    else if (shape.kind === "Circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    return 0;
}
getArea({ kind: "Circle", radius: 10 });
getArea({ kind: "Rectangle", width: 4, height: 5 });
console.log("=================================");
function greet([firstName, lastName]) {
    return `Hello, ${firstName} ${lastName}`;
}
console.log(greet(["Jane", "Doe"]));
const makeAdder = (x) => {
    return (y) => x + y;
};
const add5 = makeAdder(5);
const result = add5(10);
console.log(result);
