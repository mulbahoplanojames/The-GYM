/* 
01. getElementById() – Select an element by ID
📋 Task:
You have a <div> with an id="welcome". Use JavaScript to change its text to “Hello, DOM!”.

🎯 Objective:
    Select the element by ID
    change text content

✅ Bonus Challenge:
Change its background color to lightblue.
*/

const welcomeMessge = document.getElementById("welcome");
welcomeMessge.textContent = "Hello Dom";
welcomeMessge.style.background = "lightblue";

/*
02. getElementById() – Basic Text Update

📋 Task:
Select a paragraph with the id="status" and update its text content to "Page Loaded Successfully".

🎯 Objective:
Practice selecting an element by its ID and modifying its textContent property.
*/

const statusPara = document.getElementById("status");
// console.log(statusPara.previousSibling);
statusPara.textContent = "Page Loaded Successfully";

/*
03. getElementsByName() – Select elements by name
📋 Task:
There are multiple radio buttons with name="gender". Log the value of the one that is currently checked.

🎯 Objective:
    Use getElementsByName("gender")
    Loop through and find the checked input

✅ Bonus Challenge:
Display the selected value inside a <p> element.
*/

const genders = document.getElementsByName("gender");
const selectedGender = document.getElementById("selectedGender");
// console.log("🚀 ~ basic01.js ~ genders:", genders);

for (let gender of genders) {
  if (gender.checked) {
    // console.log(gender.value);
    selectedGender.textContent = gender.value;
  }
}

/*
04. getElementById() – Change Element Style

📋 Task:
Select a button with the ID submitBtn and change its background color to green.

🎯 Objective:
Use getElementById to access an element and manipulate its style via JavaScript.
*/

const submitButton = document.getElementById("submitBtn");
// console.log(submitButton);
const color = "blue";

submitButton.addEventListener("click", () => {
  submitButton.style.background = color;
});

/*
05. getElementsByName() – Count Checked Checkboxes

📋 Task:
Count how many checkboxes with name="hobby" are checked and display the count inside a <span> with the ID count.

🎯 Objective:
Use getElementsByName() to work with groups of form inputs and read their checked state.
*/

const hobbies = document.getElementsByName("hobby");
// console.log([...hobbies].length);
let count = 0;
const hobbyCount = document.getElementById("count");
for (let hobby of hobbies) {
  if (hobby.checked) {
    count++;
  }
}
hobbyCount.innerText = `Boxes checked ${count}`;

/*

06. getElementsByName() – Enable Submit on Selection

📋 Task:
Disable a submit button by default. When any radio input with name="level" is selected, enable the button.

🎯 Objective:
Learn how to listen for changes on elements selected by name and update other DOM elements dynamically.

*/

const getStartedButton = document.getElementById("getStartedBtn");
const level = document.getElementsByName("level");

for (let i = 0; i < level.length; i++) {
  // console.log(level[i]);
  // console.log(level[i].value);
  if (level[i].value === "disabled" && level[i].checked) {
    getStartedButton.disabled = true;
  }

  if (level[i].value === "enable" && level[i].checked) {
    getStartedButton.disabled = false;
  }
}

/*
07. getElementsByTagName() – Style All Headings

📋 Task:
Select all <h2> tags on the page and change their font size to 28px and color to darkblue.

🎯 Objective:
Use getElementsByTagName() to access multiple elements and modify their style properties.
*/

const h2 = document.getElementsByTagName("h2");
console.log(h2);
for (let item of h2) {
  item.style.fontSize = "24px";
  item.style.color = "purple";
}
