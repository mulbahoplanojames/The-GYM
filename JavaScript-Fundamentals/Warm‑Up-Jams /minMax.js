/*
minMax(arr) returns an object {min, max}.
*/

function minMax(arr) {
  //   console.log(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    max,
    min,
  };
}

console.log(minMax([8, 1, 9]));
