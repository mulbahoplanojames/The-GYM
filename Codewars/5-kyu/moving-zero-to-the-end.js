const solve1 = (arr) => {
  const zero = arr.filter((num) => num === 0);
  const nonZero = arr.filter((num) => num !== 0);
  return [...nonZero, ...zero];
};

console.log(solve1([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
