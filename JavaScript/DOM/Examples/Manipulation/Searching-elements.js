// Getting element by ID
const aboutSection = document.getElementById("about-section");
aboutSection.style.background = "blue";
console.log("🚀 ~ Searching-elements.js ~ aboutSection:", aboutSection);

const contactSection = document.getElementById("contact-section");
console.log("🚀 ~ Searching-elements.js ~ contactSection:", contactSection);

// Getting elements using querySelector
console.log("----------------------------------------------------");
const h1 = document.querySelector("h1");
const aboutDescription = document.querySelector(".about-description");
const aboutSection01 = document.querySelector("#about-section");
console.log("🚀 ~ Searching-elements.js ~ aboutSection01:", aboutSection01);
console.log("🚀 ~ Searching-elements.js ~ aboutDescription:", aboutDescription);
console.log(h1);

// Getting elements using querySelectorAll
console.log("----------------------------------------------------");
const allAboutDesciption = document.querySelectorAll(".about-description");
console.log(
  "🚀 ~ Searching-elements.js ~ allAboutDesciption:",
  allAboutDesciption
);

// Getting elements by class names
console.log("----------------------------------------------------");
// const productCard = document.getElementsByClassName("card");
const productCard = document.getElementsByTagName("div");
console.log("🚀 ~ Searching-elements.js ~ productCard:", productCard);

const allOrangeJuiceByClass = document.getElementsByClassName("orange juice");
console.log(
  "🚀 ~ Searching-elements.js ~ allOrangeJuiceByClass:",
  allOrangeJuiceByClass
);

console.log("----------------------------------------------------");
const element = document.createElement("div");
element.id = "test";
const el = document.getElementById("test"); // el will be null!
