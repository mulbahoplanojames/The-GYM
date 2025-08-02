const DIV = document.createElement("div");
const p = document.createElement("p");
const button = document.createElement("button");
// console.log(DIV);
// console.log(p);
// console.log(button);

p.innerText = "Welcome to our website";
button.innerText = "Click Me";

DIV.appendChild(p);
DIV.appendChild(button);
DIV.style.background = "lightblue";
DIV.style.padding = "10px";

document.body.appendChild(DIV);
