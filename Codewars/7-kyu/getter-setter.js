const person = {
  firstName: "Jane",
  lastName: "Doe",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

// Example usage
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
