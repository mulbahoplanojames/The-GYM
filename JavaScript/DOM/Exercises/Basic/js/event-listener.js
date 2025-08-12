const navLinks = document.querySelector("#nav-links");
console.log(navLinks);

const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// console.log(parent.parentElement);

console.log("grandParent", grandParent.innerText);

document.body.addEventListener("dblclick", () => {
  alert("Mouse double click");
});

grandParent.addEventListener("click", () => {
  console.log("grandParent");
});

parent.addEventListener("keydown", (e) => {
  console.log("Parent");
  parent.style = "background:pink";
});

child.addEventListener("mouseover", (e) => {
  console.log("child");
  e.stopPropagation();
  e.target.style = "background:orange";
});

child.addEventListener("mouseout", (e) => {
  console.log("child");
  e.stopPropagation();
  e.target.style = "background:lightblue";
});

const startEvent = new Event("start");

document.addEventListener("start", () => {
  console.log("start Event is now on");
});

document.dispatchEvent(startEvent);

// To assign event
const event = new CustomEvent("start", {
  detail: {
    platform: "GeeksforGeeks",
  },
});
// To trigger the event Listener
document.addEventListener("start", (e) => {
  console.log(
    `start event triggered on platform :
    ${e.detail.platform}`
  );
});
// To trigger the Event
document.dispatchEvent(event);

// for (let i = 1; i <= 200; i++) {
//   const newElement = document.createElement("p");
//   newElement.textContent = "This is paragraph number " + i;

//   document.body.appendChild(newElement);
// }

// const start = performance.now();
// console.log(start);
// const fragment = document.createDocumentFragment(); // ← uses a DocumentFragment instead of a <div>

// for (let i = 0; i < 200; i++) {
//   const newElement = document.createElement("p");
//   newElement.innerText = "This is paragraph number " + i;

//   fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment);
// const end = performance.now();
// console.log(end);

// const startingTime = performance.now();
// console.log(startEvent);

// for (let i = 1; i <= 100; i++) {
//   for (let j = 1; j <= 100; j++) {
//     console.log("i and j are ", i, j);
//   }
// }

// const endingTime = performance.now();
// console.log(endingTime);
// console.log("This code took " + (endingTime - startingTime) + " milliseconds.");

// Call stack

function addParagraph() {
  const para = document.createElement("p");
  para.textContent = "JavaScript is single threaded!";
  document.body.appendChild(para);
}

function appendNewMessage() {
  const para = document.createElement("p");
  para.textContent = "Isn't that cool?";
  document.body.appendChild(para);
}

addParagraph();
appendNewMessage();
