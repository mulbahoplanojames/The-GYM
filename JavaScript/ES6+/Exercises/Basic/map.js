const myMap = new Map();
console.log(myMap);

// Note: countries

const countries = new Map();

// NOte: Adding entries to a map
countries
  .set("liberia", {
    population: "1.3 millions",
    language: "English",
    location: "West",
  })
  .set("rwanda", {
    population: "13 millions",
    language: "English",
    location: "East",
  })
  .set("Sudam", {
    population: "4 millions",
    language: "Arabic",
    location: "North",
  });
// console.log(countries);

// NOte: getting entries from a map
// console.log(countries.get("liberia"));
// console.log(countries.get("nigeria"));

// NOte: removing entries from a map
// console.log(countries.delete("Sudam"));
// console.log(countries);

// NOte: removing all entries from a map
// console.log(countries.clear());
// console.log(countries);
// console.log(countries);

// Note: looping over a map

//! keys
// for (let key of countries.keys()) {
//   console.log(key);
// }

//! values
// for (let value of countries.values()) {
//   console.log(value);
// }

//! entries
// for (let [key, value] of countries.entries()) {
//   console.log(
//     `This is a beautiful called ${key} and it is located in the ${value.location}`
//   );
// }

// employees
const employees = new Map();
employees
  .set("employe1", {
    name: "Oplano",
    age: 12,
  })
  .set("employe2", {
    name: "Wilma",
    age: 16,
  })
  .set("employe3", {
    name: "abdalla",
    age: 12,
  });

// console.log(employees);
// console.log(employees.has("peter"));
// console.log(employees.has("employe1"));

// const employe = employees.values();
// console.log(employe.next().value);
// console.log(employe.next().value);
// console.log(employe.next().value);

for (employee of employees) {
  console.log(employee);
}

// employees.clear();

console.log([...employees.keys()]);
console.log([...employees]);
console.log(employees.get("jame"));
console.log(employees.keys());
// contacts
