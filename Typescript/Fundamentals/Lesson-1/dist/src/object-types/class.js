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
console.log(invoice1);
console.log(invoice2);
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
// commit message
// Refactor Coder class and interface for improved type safety and add display methods
// - Implemented CoderInterface and updated Coder class to match interface
// - Added optional scores property and display methods for languages, tools, and scores
// - Improved constructor to handle optional scores
// - Ensured all class properties are explicitly
