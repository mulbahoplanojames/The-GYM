// 🔨 Practical Usage

const hr = document.createElement("hr");
const hr1 = document.createElement("hr");
const hr2 = document.createElement("hr");

//note: Write a function that creates a new <button> element with a label "Click Me" and appends it to the body of the document.

const addButonToPage = () => {
  const btn = document.createElement("button");
  btn.textContent = "Click Me";
  btn.style.background = "blue";
  btn.style.color = "white";
  document.body.appendChild(btn);
};

addButonToPage();

document.body.appendChild(hr);

//note: How can you use document.createElement() to create a list of items from a given JavaScript array of strings?

// Steps
// create the array
// create a ul element
// loop over and create a li element and append the li element to the ul

const skills = ["HTML", "CSS", "JavaScript", "Java", "React", "Python"];

const ul = document.createElement("ul");

const list = skills.map((skill) => {
  let li = document.createElement("li");
  li.textContent = skill;
  return li;
});

list.forEach((li) => {
  ul.appendChild(li);
});
document.body.appendChild(ul);
document.body.appendChild(hr1);

//note: Imagine you're building a comment section. Write code to dynamically create a new comment card (with <div>, <h4>, and <p>) using document.createElement() when a user submits a comment.

// Steps
// create the div, h4 and p elements
// Get the value form the input fields
// add them to the inner text of the h4 and p
// create a function to add the card each time a button is Click

const addCommentBtn = document.querySelector("#addComment");
const commentWripper = document.querySelector("#comment-wripper");

addCommentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const commnetH4 = document.createElement("h4");
  const commnetP = document.createElement("p");
  const div = document.createElement("div");
  const commentTitle = document.querySelector("#title").value;
  const commentDescription = document.querySelector("#description").value;

  if (commentTitle === "" || commentDescription === "") {
    alert("Please Add a commment title and descriprion ");
  }

  commnetH4.textContent = commentTitle;
  commnetP.textContent = commentDescription;

  div.classList.toggle("card");
  div.append(commnetH4, commnetP);
  commentWripper.appendChild(div);
});

//note: How would you set custom attributes (like data-id or aria-label) on an element created with document.createElement()?
const section = document.createElement("section");
section.setAttribute("aria-label", "about-us");
section.setAttribute("id", "about-section");
section.textContent = "Add attributes";
document.body.appendChild(section);

//note: Demonstrate how you would create a <select> element with multiple <option> children using document.createElement() and append it to an existing <form>.

// create the select element
// create an option element
// create an array of options
// loops through the options and set the textcontent of each to the option element
// append each option to the select element

const select = document.createElement("select");
const option = document.createElement("option");

const options = [
  "Liberia",
  "Rwanda",
  "SOuth Sudan",
  "Uganda",
  "Gabon",
  "Congo",
];
