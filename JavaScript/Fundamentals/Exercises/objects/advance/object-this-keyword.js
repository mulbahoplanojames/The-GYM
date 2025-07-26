/*
Create an object user with properties and a method greet that uses this.name to print a greeting.
*/

const User = {
  name: "James",
  greet: function () {
    console.log(`Good morning ${this.name}`);
  },
};

User.greet();
