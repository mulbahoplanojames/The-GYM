// This is a demo file for manipulation

console.log(document.body);

const names = ["James", "peter", "paul"];
const myName = "Mulbah";

// localStorage []

localStorage.getItem("names");

localStorage.setItem("names", [...names, myName]);

// for (let node of document.body.childNodes) {
//   alert(node); // shows all nodes from the collection
// }
// for (let elem of document.body.children) {
//   alert(elem);
// }

console.log("first");

// parent of <body> is <html>
// alert(document.body.parentNode === document.documentElement);
console.log(document.documentElement);
console.log(document.body.previousElementSibling);
console.log(document.head.nextElementSibling);

console.log("------------------------------------------");

console.log(document.body.children[0]);
console.log(document);
