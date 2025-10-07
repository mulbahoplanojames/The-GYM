import { display, calc as calculation, Human } from "./lib-module.js";

console.log(display("oplano", "Learning with my peers at the Gym is fun"));
console.log(`
    `);

class Student extends Human {
  #grade;
  constructor(name, age, gender, department, grade) {
    super(name, age, gender);
    this.department = department;
    this.#grade = grade;
  }

  introduce() {
    return `Hello, i am ${this.name} from the department of ${this.department}. It's my pleasure meeting you!`;
  }

  study() {
    return `I study very hard this semenster and  I became the first person from the department of ${
      this.department
    } to get the grade of ${this.#grade}`;
  }
}

const james = new Human("James", 40, "male");
console.log(james.introduce());
console.log(`
    `);

const pujue = new Student("Pujue", 12, "male", "Sciences", 92);
console.log(pujue.introduce());
console.log(`
        `);
console.log(pujue.study());

console.log("------------------");

const [sum, difference, product, module] = calculation(10, 5);
console.log(`
The Sum is ${sum}
The product is ${product}
The difference is ${difference}
the module is ${module}
`);
