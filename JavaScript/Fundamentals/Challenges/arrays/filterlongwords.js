const filterLongWords = (words, n) => {
  const newWords = words.filter((word) => word.length > n);

  return newWords;
};

console.log(filterLongWords(["hello", "world", "javascript", "coding"], 5));
console.log(filterLongWords(["hello", "world", "ice cream", "banana"], 6));
