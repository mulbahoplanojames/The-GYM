/*
Check for Vowel or Consonant
Task: Input a single letter input and checks whether it is a
vowel (a, e, i, o, u) or a consonant.
*/

const letter = "W";

if (
  letter === "a" ||
  letter === "A" ||
  letter === "e" ||
  letter === "E" ||
  letter === "i" ||
  letter === "I" ||
  letter === "o" ||
  letter === "O" ||
  letter === "u" ||
  letter === "U"
) {
  console.log(`${letter} is a vowel`);
} else {
  console.log(`${letter} is a consonant`);
}
