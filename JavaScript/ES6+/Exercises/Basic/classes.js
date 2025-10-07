// note: constructor function
function StudentNew(firstName, lastName, department) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.department = department;
}

const newStudent1 = new StudentNew("james", "Mulbah", "Networking");
const newStudent2 = new StudentNew("Reginal", "Pujue", "Data Science");
// console.log(newStudent1);
// console.log(newStudent2);

// note: Working with class in ES6
class Car {
  constructor(name, brand, model, color) {
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.color = color;
  }

  getCar() {
    console.log(
      `This our new car ${this.name} with the color ${this.color} from the best brand ${this.brand}`
    );
  }
}

const Car1 = new Car("BMW1615", "BMW", "2025", "red");
console.log(Car.__proto__);
// Car1.getCar();

// note: Why is the type of  a class is a function not a class
// note: What is the prototypal inheritance
console.log(typeof Car);

class Toy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  GetToy() {
    console.log(`Toy name ${this.name}, price ${this.price}`);
  }
}
const myToy1 = new Toy("Magic Ball", 12.9);
// myToy1.GetToy();

// note: Static methods

class MyStaticClass {
  constructor(name = "peter") {
    this.name = name;
  }
  static printName(n) {
    console.log(`Hello, I am ${n.name}`);
  }
  static age = 20;
}
const myClass1 = new MyStaticClass();
// console.log(myClass1.name);
// MyStaticClass.printName(myClass1);
// console.log(MyStaticClass.age);
// myClass1.printName();
// console.log(object);

// note : using gettes and setters
class Phone {
  brand = "Samsumg";
  version = "Ultra22";

  constructor(_brandName) {
    this._brandName = _brandName;
  }

  make() {
    console.log(`This is th last latest ${this.brand} ${this.version}`);
  }

  get phoneBrandName() {
    return this._brandName;
  }

  set phoneBrandName(value) {
    this._brandName = value;
  }
}
const phone = new Phone("Apple");

// console.log(phone.brand);
// console.log(phone.phoneBrandName);
// phone.phoneBrandName = "Opos";
// console.log(phone.phoneBrandName);
// phone.phoneBrandName = "Itel";
// console.log(phone.phoneBrandName);
// console.log(phone.make());

class Calculator {
  static add(a, b) {
    return a + b;
  }

  multiply() {
    return a * b;
  }
}
// const calculator1 = new Calculator();
// console.log(calculator1.add(10, 20));

// note : Public and Private properties and methods
class WashingMachine {
  #powerStatus = false;

  constructor(brand) {
    this.brand = brand;
  }

  start() {
    if (!this.#powerStatus) {
      this.#turnOn();
    }

    // spin
    this.#spin();

    // drain
    this.#drain();

    // stop
    this.stop();
  }

  stop() {
    // turn off
    this.#turnOff();
  }

  #drain() {
    console.log("Draining...");
  }

  #spin() {
    console.log("Spining...");
  }

  #turnOn() {
    this.#powerStatus = true;
    console.log("Power On");
  }

  #turnOff() {
    this.#powerStatus = false;
    console.log("Power Off");
  }
}
const samsumgWashingMachine = new WashingMachine("Samsumg");
// samsumgWashingMachine.start();
// console.log(samsumgWashingMachine.brand);
// console.log("---------------------------");
// const lgWashingMachine = new WashingMachine("LG");
// lgWashingMachine.start();
// console.log(lgWashingMachine.brand);

// note: inheritance

// human -> sleep, introduce, eat
// human -> Software Developer
// human -> Teacher
// human -> Student
// human -> Doctor

class Human {
  constructor(username, age, gender) {
    this.username = username;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hello, i am ${this.username}`);
  }

  sleep() {
    console.log(
      `${this.gender === "male" ? "Mr." : "Mrs."} ${this.username} is ${
        this.age
      } and ${this.gender === "male" ? "he" : "she"} loves sleeping a lot`
    );
  }

  eat() {
    console.log(
      ` ${this.gender === "male" ? "Mr." : "Mrs."} ${
        this.username
      } loves eating a lot`
    );
  }
}

// note: inherite from the Human Class
class Student extends Human {
  constructor(username, age, gender, grade, department) {
    super(username, age, gender);
    this.grade = grade;
    this.department = department;
  }

  introduce() {
    console.log(
      `Hello, i am ${this.username} from the department of ${this.department}`
    );
  }

  study() {
    console.log(
      `I am first person in my ${this.department} to get the grade of ${this.grade}`
    );
  }
}

// note: inherite from the Human Class
class Doctor extends Human {
  constructor(username, age, gender) {
    super(username, age, gender);
  }

  diagnose(patient) {
    console.log(
      `Dr. ${this.username} is treating ${patient} whose's feeling sick`
    );
  }

  prescribeMedication(patient, medication) {
    console.log(
      `Dr. $${this.username} prescribe this medication ${medication} for ${patient}`
    );
  }
}

// students
const oplano = new Student("Oplano", 20, "Software Engineering", 90, "male");
const abdo = new Student("Abdalla", 19, "Data Science", 87, "male");
const wilma = new Student("wilma", 21, "Networking", 97, "female");
// oplano.study();
// oplano.eat();
// console.log(abdo);
// console.log(wilma);

// DOctor
const james = new Doctor("James", 30, "male");
james.diagnose("Oplano");

// note: Private properties

class BankAccount {
  #balance = 0;

  deposit(amount) {
    console.log((this.#balance += amount));
  }

  withdraw(amount) {
    console.log((this.#balance -= amount));
  }

  getBalance() {
    console.log(this.#balance);
  }
}

const richardAccount = new BankAccount();
richardAccount.deposit(100);
richardAccount.getBalance();
richardAccount.withdraw(20);
richardAccount.getBalance();
