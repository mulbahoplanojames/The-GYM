/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

var education = "a Bachelor's degree";
var salary = 0;

switch (education) {
  case "no high school diploma":
    salary += 25636;
    break;
  case "a high school diploma":
    salary += 35256;
    break;
  case "an Associate's degree":
    salary += 41496;
    break;
  case "a Bachelor's degree":
    salary += 59124;
    break;
  case "a Master's degree":
    salary += 69732;
    break;
  case "a Professional degree":
    salary += 89960;
    break;
  case "a Doctoral degree":
    salary += 84396;
    break;
}

var result = `In 2015, a person with ${education} earned an average of $${salary.toLocaleString("en-US")}/year.`;

console.log(result);
