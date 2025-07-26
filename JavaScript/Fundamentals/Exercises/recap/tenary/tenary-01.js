// 1. Check if a number is odd or even and assign the result to a variable.

let number = 3;
function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log("🚀 ~ tenary-01.js ~ isEven ~ isEven:", isEven(5));

// 2. Assign "Pass" if the score is 50 or higher; otherwise, assign "Fail".
function checkSocre(score) {
  return score > 50 ? "Pass" : "Fail";
}
let score = 67;
console.log("🚀 ~ tenary-01.js ~ checkSocre ~ checkSocre:", checkSocre(30));

// 3. Based on `isLoggedIn`, set message to "Welcome" or "Please log in".
function checkIsLoggedIn(isLoggedIn) {
  return isLoggedIn ? "Welcome" : "Please log in";
}
const isLoggedIn = true;
console.log(
  "🚀 ~ tenary-01.js ~ checkIsLoggedIn ~ checkIsLoggedIn:",
  checkIsLoggedIn(isLoggedIn)
);

// 4. Assign a student fee depending on whether `isStudent` is true.
function checkIsStudent(isStudent) {
  return isStudent ? "Fees Asign" : "No fees asign";
}
const isStudent = false;
console.log(
  "🚀 ~ tenary-01.js ~ checkIsStudent ~ checkIsStudent:",
  checkIsStudent(isStudent)
);

// 5. Set the page background color to "black" or "white" depending on theme.
function toggleTheme(theme) {
  return theme === "light"
    ? `Page background is white`
    : `Page background is black`;
}
const theme = "light";
console.log(
  "🚀 ~ tenary-01.js ~ toggleTheme ~ toggleTheme:",
  toggleTheme(theme)
);
