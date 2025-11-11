// const twoSum = (numbers, target) => {
//   const seen = new Map();
//   for (let i = 0; i < numbers.length; i++) {
//     const complement = target - numbers[i];
//     if (seen.has(complement)) {
//       return [seen.get(complement), i];
//     }
//     seen.set(numbers[i], i);
//   }
// };

const twoSum = (numbers, target) => {
  const seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(numbers[i], i);
  }
};

// console.log(twoSum([1, 2, 3], 4)); // [0, 2]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]
