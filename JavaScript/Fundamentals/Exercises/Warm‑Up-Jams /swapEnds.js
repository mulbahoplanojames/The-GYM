/*
Create swapEnds(arr) that swaps first & last items.
*/

const swapEnds = (arr) => {
  //   console.log("🚀 ~ swapEnds.js ~ swapEnds ~ arr:", arr);

  //first solution
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }

  // second solution
  const reverseArry = arr.reverse();
  console.log("🚀 ~ swapEnds.js ~ swapEnds ~ reverseArry:", reverseArry);
};

const numberArr = [1, 3, 5, 67, 8];

swapEnds(numberArr);
