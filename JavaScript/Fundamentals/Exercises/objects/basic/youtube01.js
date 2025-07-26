const Mexico = {
  id: 24,
  name: "Mexico",
  capital: "Mexico City",
  neighboors: ["USA", "Belize", "Germany"],
};

Mexico.id = 25;
Mexico.neighboors.push("England");

// console.log(Mexico);

const myPet = {
  name: "Spot",
  type: "Dog",
  breed: "Pooodle",
  age: 8,
  friends: ["Bit", "Byte", "Data"],
};

// new property
myPet.color = "Black";
myPet.breed = "Beagle";
myPet.friends.pop();
myPet.friends.push("Chip");
console.log(myPet);
