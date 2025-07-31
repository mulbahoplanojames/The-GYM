function missingWord(nums, str) {
  // Remove all whitespace from the string and convert to lowercase
  // const removeWhitespace = str.replace(/\s+/g, "").toLowerCase();
  const removeWhitespace = str.split(" ").join("").toLowerCase();
  let newWord = "";

  // Sort the numbers in ascending order
  const sortedNums = [...nums].sort((a, b) => a - b);

  // Check if any index is out of bounds
  for (const num of sortedNums) {
    if (num >= removeWhitespace.length) {
      return "No mission today";
    }
    newWord += removeWhitespace[num];
  }

  return newWord;
}

console.log(missingWord([20, 3, 27], "I love eating toasted cheese and tuna")); // should output "vet"
