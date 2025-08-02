const headings = document.getElementsByTagName("pre");
console.log(headings);
// for (let i = 0; i < headings.length; i++) {
//   console.log(headings[i]);
// }

for (let heading of headings) {
  console.log(heading);
}

[...headings].forEach((heading) => console.log(heading));

console.log("-----------------------");

const lists = document.getElementsByClassName("item");
console.log("🚀 ~ elememts.js ~ lists:", lists);

for (let item of lists) {
  console.log(item.textContent);
}

console.log("-----------------");
let element = document.querySelector("*");
console.log(element);

let elements = document.querySelectorAll("*");
console.log(elements);

console.log("-----------------");
const productCard = document.getElementById("product-cards");
const cards = productCard.querySelector(".card");
console.log("parentNode", cards.parentNode);
console.log("ChildrenNode", productCard.children);
