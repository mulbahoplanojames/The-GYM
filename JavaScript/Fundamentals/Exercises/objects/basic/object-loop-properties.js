/*
Use a for...in loop to print all keys and values of the products object.
*/

const Products = {
  name: "Macbook Pro 2015",
  brand: "Apple",
  year: "2015",
  color: "Light Gray",
  ram: "16GB",
  batteryPower: "1085MPH",
  reviews: ["Best of all time", "Greate job apple", "Can't stop using it"],
};

for (let key in Products) {
  console.log(key + "--" + Products[key]);
}
