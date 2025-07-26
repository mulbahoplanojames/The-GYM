// 1. Write a condition to check if a number is even and print "Even" or "Odd" accordingly.

const isEven = (num) => {
  return num % 2 === 0 ? `${num} is even` : `${num} is ddd`;
};
console.log("🚀 ~ recap-01.js ~ isEven ~ isEven:", isEven(5));

// 2. Check if a user is old enough to vote (18+) and display an appropriate message.

const isOldEnough = (age) => {
  return age >= 18 ? `Old enough to vote` : `Not old enough to vote`;
};
console.log("🚀 ~ recap-01.js ~ isOldEnough ~ isOldEnough:", isOldEnough(12));

// 3. Based on age input, classify the person as a child (0–12), teen (13–17), adult (18–59), or senior (60+).
const isAdult = (age) => {
  if (age > 0 && age < 13) {
    return "Child";
  } else if (age > 13 && age < 17) {
    return "teen";
  } else if (age > 18 && age < 59) {
    return "Child";
  } else {
    return "Senior ";
  }
};
console.log("🚀 ~ recap-01.js ~ isAdult ~ isAdult:", isAdult(24));

// 4. Write a program that checks if a year is a leap year.
const isLeapYear = (days) => {
  return days > 365 && days === 366 ? "Leap year" : "Not leap year";
};
console.log("🚀 ~ recap-01.js ~ isLeapYear ~ isLeapYear:", isLeapYear());

// 5. Assign letter grades (A, B, C, D, F) based on a numeric score.

const checkGrade = (grades) => {
  const sumOfGrades = grades.reduce((prev, current) => prev + current, 0);
  const average = sumOfGrades / grades.length;

  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else if (average >= 50 && average < 60) {
    return "A";
  } else {
    return "Failed";
  }
};

const grades = [90, 45, 78, 89, 78];
console.log("🚀 ~ recap-01.js ~ checkGrade ~ checkGrade:", checkGrade(grades));
