var eatsPlants = false;
var eatsAnimals = false;

var category =
  eatsPlants && !eatsAnimals
    ? "herbivore"
    : eatsPlants && eatsAnimals
      ? "omnivore"
      : !eatsPlants && eatsAnimals
        ? "carnivore"
        : "undefined";

console.log(category);
