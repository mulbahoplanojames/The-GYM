// Create the NSA object
const NSA = {
  _logs: [],

  record(entry) {
    this._logs.push(entry);
  },

  log(person) {
    // Filter out all logs belonging to the given person
    const personLogs = this._logs.filter((log) => log.startsWith(person.name));
    if (personLogs.length === 0) return "No Entries";

    // Remove retrieved logs
    this._logs = this._logs.filter((log) => !log.startsWith(person.name));

    // Return formatted log string
    return personLogs.join("\n");
  },
};

// Create the Person class
class Person {
  constructor(name) {
    this.name = name;
  }

  call(cellphone, callee) {
    const entry = `${this.name} called ${callee.name} from ${cellphone.owner.name}'s phone(${cellphone.number})`;
    NSA.record(entry);
  }

  text(cellphone, ...recipients) {
    for (const recipient of recipients) {
      const entry = `${this.name} texted ${recipient.name} from ${cellphone.owner.name}'s phone(${cellphone.number})`;
      NSA.record(entry);
    }
  }
}

// Example usage:
const dan = new Person("Dan");
const alex = new Person("Alex");
const erin = new Person("Erin");

const phone1 = { owner: dan, number: "202-555-0149" };
const phone2 = { owner: alex, number: "202-555-0199" };

dan.call(phone1, erin);
dan.text(phone2, alex);

console.log(NSA.log(dan));
// Output:
// Dan called Erin from Dan's phone(202-555-0149)
// Dan texted Alex from Alex's phone(202-555-0199)

console.log(NSA.log(dan)); // "No Entries"
