"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee = ["James", 20, true];
// employee.push("")
const spreadTuple = ["james", 12, 90, 89, 76];
const optionalTuple = [23, 234, 23];
const nameingTuple = [12, "james"];
let click;
// How do you make a tuple immutable ?
//     What are named tuple elements ?
//     When should you use a tuple instead of an array ?
//     How are string enums different from numeric enums ?
//     When designing a scalable frontend application, when would you choose enum over union types?
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["STAFF"] = 2] = "STAFF";
})(Role || (Role = {}));
