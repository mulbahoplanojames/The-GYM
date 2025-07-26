/*
Build countEvens(arr) that returns how many elements are even.
*/

const countEvens = (arrayParams) => {
  //   console.log(arrayParams);

  // first solution
  const evenArray = [];
  for (let i = 0; i < arrayParams.length; i++) {
    if (arrayParams[i] % 2 === 0) {
      evenArray.push(arrayParams[i]);
    }
  }
  const numberOfEvenNumberInArray = evenArray.length;
  console.log(
    "🚀 ~ countEvens.js ~ countEvens ~ numberOfEvenNumberInArray:",
    numberOfEvenNumberInArray
  );
  //   console.log("🚀 ~ countEvens.js ~ countEvens ~ evenArray:", evenArray);

  // Second solution
  const filterEven = arrayParams.filter((item) => item % 2 === 0).length;
  console.log("🚀 ~ countEvens.js ~ countEvens ~ filterEven:", filterEven);
};

const randomArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

countEvens(randomArr);

c;
