/*
Add a new property color to the car object, update year, and then delete the brand property.
*/

const Car = {
  brand: "BMW",
  model: "BMW Off Road 202",
  year: "2024",
};

// new property
Car.color = "Red";
console.log(Car);
console.log("------------------------");

// update year
Car.year = "2025";
console.log(Car);
console.log("------------------------");

// delete brand property
delete Car.brand;
console.log(Car);
console.log("------------------------");
