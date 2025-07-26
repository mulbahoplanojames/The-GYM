/*
Write sumArray(arr) to total an array of numbers.
*/

const sumArray = (arr) => {
  // console.log("Arr", arr);

  // first solution
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    sum += arr[i];
  }
  console.log("🚀 ~ sumArray.js ~ sumArray ~ sum:", sum);

  // Second solution
  const secondSum = arr.reduce(
    (preValue, currentValue) => preValue + currentValue,
    0
  );
  console.log("🚀 ~ sumArray.js ~ sumArray ~ secondSum:", secondSum);
};

const arry = [1, 3, 4, 5, 43, 56, 3];
sumArray(arry);
