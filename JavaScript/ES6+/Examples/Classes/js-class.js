// Note : 1. Create a Person class with a constructor that takes name and age. Add a method introduce that returns "Hi, I'm [name] and I'm [age] years old." Instantiate and call it.

// Note: 3. Add a getter for fullName in the Person class (assuming firstName and lastName properties). Test by setting them and logging the getter.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get personName() {
    return this.name;
  }

  set personName(value) {
    this.name = value;
  }

  introduce() {
    return `Hi, I'am ${this.name} and i am ${this.age} years old`;
  }
}
const peter = new Person("Peter", 12);
console.log(peter.introduce());
peter.personName = "Wilma";
console.log(peter.personName);

// Note: 2. Extend the Person class to create an Student class that adds a major property. Override introduce to include the major. Test with a new Student instance.

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    return `Hi, I'am ${this.name} and i am doing ${this.major} at my university`;
  }
}
const richard = new Student("Richard", 20, "Software Engineering");
console.log(richard.introduce());

//  Note: 1 Write a Rectangle class with width and height in the constructor. Add a getArea method that returns width * height. Create an instance with 5 and 4, and log the area.

// Note: 2 Add a static method createSquare to the Rectangle class that takes a side length and returns a new Rectangle instance for a square. Test it.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  static createSquare(sideLength) {
    return sideLength * sideLength;
  }
}
const rectangle1 = new Rectangle(10, 2);
console.log(rectangle1.getArea());
console.log(Rectangle.createSquare(10));

// Note : Create a BankAccount class with private #balance (use private fields). Add methods deposit(amount) and getBalance(). Test depositing 100 and logging balance.

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
const pujueAccount = new BankAccount();
pujueAccount.deposit(500);
pujueAccount.deposit(250);
console.log(pujueAccount.getBalance());

// Note: Implement inheritance: Create a Vehicle base class with make and model. Extend to Car with a doors property and a start method that logs "Car started.".

class Vehicle {
  constructor(model) {
    this.model = model;
  }

  make() {
    return `This is the lastest version of ${this.model}`;
  }
}

class Car extends Vehicle {
  #door;
  constructor(model, door) {
    super(model);
    this.#door = door;
  }

  start() {
    return `Car started`;
  }
}
const KIV = new Car("KIV 2025", 4);
console.log(KIV.make());

const obj = {
  name: "Oplano",
  self: this,
  logLater() {
    // const self = this; // Capture this manually
    // setTimeout(() => {
    const test = () => {
      console.log("Arrow with captured this:", this.name);
    };

    test(); // }, 1000);
  },

  hello: () => {
    console.log(this.self);
  },
};

obj.logLater();
obj.hello();

class Parent {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    return `Hello, i am ${this.name} a parent`;
  }

  sleep() {
    return `Please, i am sleeping`;
  }
}

class Child extends Parent {
  constructor(name, age, gender, toys) {
    super(name, age, gender);
    this.toys = toys;
  }

  introduce() {
    return `Hello, i am ${this.name} a Child and i am ${this.age} years old`;
  }
}
const daddy = new Parent("Daddy", 34, "male");
console.log(daddy.introduce());

console.log(`
`);

const billa = new Child("Billa", 12, "male", ["car", "banana"]);
console.log(billa.introduce());
