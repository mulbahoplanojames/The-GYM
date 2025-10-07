export const display = (name, message) => {
  return `hello, i am ${name}, and this is my message: ${message}`;
};

export const calc = (num1, num2) => {
  return [num1 + num2, num1 - num2, num1 * num2, num1 % num2];
};

export class Human {
  #gender;
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.#gender = gender;
  }

  introduce() {
    return `Hello, i am ${this.name} and it's nice meeting you!`;
  }

  sleep(hour) {
    return `Wow, it's nice to have a good sleep for ${hour} ${
      hour > 1 ? "hourss" : "hour"
    } `;
  }
}
