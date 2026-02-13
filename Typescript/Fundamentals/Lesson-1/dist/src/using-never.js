"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Inferred
const error = () => {
    throw new Error("Error using the Never Type");
};
// Annotated
const fail = () => {
    throw new Error();
};
