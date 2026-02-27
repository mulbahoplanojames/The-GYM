"use strict";
//Note: == working with class in Typescript ==
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    client;
    details;
    amount;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    getInvolve() {
        console.log(`${this.client} ${this.details} ${this.amount}`);
    }
}
const invoice1 = new Invoice("James", "Owes the amount of", 1200);
const invoice2 = new Invoice("Oplano", "Owes the amount of", 800);
class Coder {
    name;
    age;
    languages;
    scores;
    tools;
    constructor(name, age, languages, tools, scores) {
        this.age = age;
        this.name = name;
        this.languages = languages;
        this.tools = tools;
        this.scores = scores;
    }
    displayLanguages() {
        console.log(this.languages.join(", "));
    }
    displayScores() {
        console.log(this.scores ?? []);
    }
    displayTools() {
        console.log(this.tools.join(", "));
    }
    displayTotalScores() {
        return (this.scores ?? []).reduce((a, b) => a + b, 0);
    }
}
// Docs: == Working with access modifers ==
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPersonInfo() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
const p1 = new Person("James", 30);
// Docs: == Exercises ==
/**
 * //Docs: Create a User class with:

Properties: id, name, email
A constructor to initialize all properties
A method getProfile() that returns a formatted string with user information
Focus Areas:
Class syntax, constructor, public properties, method definition
*/
class User {
    id;
    name;
    email;
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getProfile() {
        console.log(`This is ${this.name} with the email ${this.email} and id of ${this.id}`);
    }
}
// const user1 = new User(101, "james", "James@gmail.com");
// user1.getProfile();
/**
 * //Docs:Create a BankAccount class:

accountNumber → public
balance → private
Constructor initializes both
Method deposit(amount: number)
Method withdraw(amount: number)
Method getBalance()
Constraint: Prevent withdrawing more than available balance.
Focus Areas:
public, private, encapsulation
 */
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance > amount) {
            this.balance -= amount;
        }
        console.log("Insufficient balance");
    }
    getBalance() {
        return this.balance;
    }
}
class MathHelper {
    static PI = 3.14159;
    static multiply(a, b) {
        return a * b;
    }
    static add(a, b) {
        return a + b;
    }
}
const products = [
    {
        id: 1,
        name: "Iphone",
        Pprice: 1000,
    },
    {
        id: 2,
        name: "book",
        Pprice: 25,
    },
    {
        id: 3,
        name: "Samsumg",
        Pprice: 1200,
    },
    {
        id: 4,
        name: "laptop",
        Pprice: 500,
    },
    {
        id: 6,
        name: "chair",
        Pprice: 70,
    },
];
class Product {
    _name;
    constructor(name) {
        this._name = name;
    }
    getPrice() {
        const result = products.filter((product) => product.name === this._name);
        if (result.length === 0) {
            console.log(`This product ${this._name} cna't be found in stock`);
        }
        result.forEach((res) => {
            console.log(`The price of this ${res.name} is ${res.Pprice} `);
        });
    }
}
// const p1 = new Product("chairs");
// p1.getPrice();
/**
 * // Docs: Create a Car class:

readonly vin
brand
year
Optional color
Method getCarInfo()
Constraint: VIN must not be modifiable after creation.
Focus Areas:
readonly, optional properties
*/
class Car {
    vin;
    brand;
    year;
    color;
    constructor(vin, brand, year, color) {
        this.vin = vin;
        this.brand = brand;
        this.year = year;
        this.color = color;
    }
    getCarInfo() {
        console.log(`This is my ${this.vin} and it was built by ${this.brand} in the year ${this.year} `);
    }
}
const v1 = new Car("BMW-G23", "BMW", "2018");
v1.getCarInfo();
/**
 * //Docs: Create:

Person class (name, age)
Employee class extending Person
Additional property: salary
Method getAnnualSalary()
Focus Areas:
extends, super(), inheritance
 */
/**
 * // Docs:9️⃣ Interfaces + Classes

Define an interface Serializable:
Method serialize(): string
Create a class Order that implements it.
Focus Areas:
implements, interface enforcement
*/
