/*
Number Range Categorizer
Description:
Take a number and check which range it falls into:

1–10
11–20
Above 20
Below 1
✅ Edge case: Handle non-integer inputs and out-of-range values.
*/

const value = 9;

if (typeof value === "number") {
  if (value < 1) {
    console.log(`${value} is less then one`);
  } else if (value >= 1 && value <= 10) {
    console.log(`${value} fall in the range of 1-10`);
  } else if (value >= 11 && value <= 20) {
    console.log(`${value} fall in the range of 11-20`);
  } else if (value > 20) {
    console.log(`${value} is above 20`);
  }
} else {
  console.log("Please enter a valid number");
}
