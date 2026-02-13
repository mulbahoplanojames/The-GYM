"use strict";
//Note: == Working with booleans ===
Object.defineProperty(exports, "__esModule", { value: true });
// Annotated
const isAdmin = false;
console.log(isAdmin
    ? "You have access to the admin dashboard and all adim roles"
    : "Access denide, You don't have permission to view this resource");
// Inferred
const isStudent = true;
const isLogin = false;
console.log(isLogin && isStudent
    ? "Redirect to the student dashboard"
    : isLogin && !isStudent
        ? "Resirect to the home page"
        : "Redirect to the Login page");
