"use strict";
/**
 // Note: 3️⃣ Extra Property Check

Create a type Car with:
brand
model
year
Then create an object with an additional property color.
What happens?
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Car = {
    brand: "GLE-239",
    model: 2025,
    year: 1024,
};
// Car.color = "red";
/**
 // Note: 4️⃣ Nested Object

Define an object user with:
username (string)
email (string)
address object containing:
city
country
zipCode
 */
const User = {
    username: "Oplano James",
    email: "mulbah@gmail.com",
    address: {
        city: "Kigali",
        country: "Rwanda",
        zipCode: "00000",
    },
};
console.log(User.address);
/**
 // Note: 5️⃣ Optional Properties

Create a Product type with:
id
name
price
discount (optional)

Then create multiple product objects (with and without discount).
 */
const Product = {
    id: 1,
    name: "Iphone 11pro",
    price: 700.99,
    discount: 15,
};
/**
 // Note: 6️⃣ Readonly Properties

Create a Config object type where:
apiKey cannot be modified
baseUrl cannot be modified
timeout can be modified
Try changing values.
 */
//Note Config Object with Readonly Properties
const Config = {
    apiKey: "your-api-key",
    baseUrl: "https://example.com",
    timeout: 5000,
};
// Config.baseUrl = "https://v1/example.com";
console.log(Config.apiKey);
/**
 // Note: 7️⃣ Method Inside Object

Create a Person type with:
firstName
lastName
getFullName() method that returns a string
Implement an object following this type.
 */
const Person = {
    firstName: "Oplano",
    lastName: "James",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};
console.log(Person);
/**
 
 //Note: 8️⃣ Function as Property

Create an object type Calculator with:
add
subtract
multiply
divide
Each should be a function that takes two numbers.
*/
const Calculator = {
    add(num1, num2) {
        const result = num1 + num2;
        return result;
    },
    subtract(num1, num2) {
        const result = num1 - num2;
        return result;
    },
    multiply(num1, num2) {
        const result = num1 * num2;
        return result;
    },
    divide(num1, num2) {
        const result = num1 / num2;
        return result;
    },
};
console.log(Calculator.add(12, 3));
console.log(Calculator.multiply(12, 3));
console.log(Calculator.subtract(12, 3));
/**
 //Note: 9️⃣ Array Inside Object

Create a BlogPost type with:
title
content
tags (array of strings)
comments (array of objects with user and message)
*/
const BlogPost = {
    title: "The Gym next Cohort",
    content: "The Gym will......",
    tags: ["Coding", "Gym Stuff", "learning"],
    comments: [
        {
            user: {
                id: 1,
                name: "james",
            },
            message: "I am willing to joing the Gym",
        },
    ],
};
/**
 // Note: 🔟 Object Inside Array

Create an array employees where each item has:
id
name
position
salary
 */
const employees = [
    {
        id: 1,
        name: "James",
        position: "Software Developer",
        salary: 1200,
    },
    {
        id: 2,
        name: "MAry",
        position: "UI/UX",
        salary: 900,
    },
];
/**
 //Note: 1️⃣1️⃣ Union Types in Object

Create a Payment type where:
amount
status can only be "pending" | "completed" | "failed"
*/
const Payment = {
    amount: 1500,
    status: "completed",
};
/**
 // Note: 1️⃣2️⃣ Literal Types in Object

Create a ThemeSettings object type where:
theme can only be "light" or "dark"
fontSize can only be 12 | 14 | 16 | 18
*/
const ThemeSettings = {
    theme: "light",
    fontSize: 12,
};
//! Level 4: Real - World Practice
/**
 // Note:
1️⃣3️⃣ E-Commerce Order System

Create a type Order with:
orderId
customer (object with name + email)
items (array of objects: productId, quantity, price)
totalAmount
status ("processing" | "shipped" | "delivered")
*/
const Orders = [
    {
        orderId: 1,
        customer: {
            name: "Peterson",
            email: "peterson@gmail.com",
        },
        items: [
            {
                productId: 5,
                price: 1200,
                quantity: 1,
            },
        ],
        totalAmount: 1200,
        status: "processing",
    },
];
/**
 // Note: 1️⃣4️⃣ API Response Object

Create a type ApiResponse with:
success (boolean)
data (object with id + name)
error (string | null)
*/
/**
 // Note: 1️⃣5️⃣ Dynamic Object Keys

Create an object type ErrorMessages where:
Keys are strings
Values are strings
(Hint: Index signatures)
*/
let n = "hi";
// n = "jsmd"
// console.log(n);
