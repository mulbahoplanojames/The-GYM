const paragraph = document.querySelector("#myParagraph");
let sentence = paragraph.innerText;

function countRepeatedWords(sentence) {
  let words = sentence.split(/\s+/);

  let wordMap = {};

  for (let word of words) {
    wordMap[word] = (wordMap[word] || 0) + 1;
  }
  return wordMap;
}

const wordCounts = countRepeatedWords(sentence);

console.log(wordCounts);

// Sort by frequency
const sortedWords = Object.entries(wordCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5); // Top 12

console.log(sortedWords);

sortedWords.forEach(([word], index) => {
  word.style.backgroundColor = "black";
});
