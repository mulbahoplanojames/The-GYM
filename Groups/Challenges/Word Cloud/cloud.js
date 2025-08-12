const paragraph = document.querySelector("#myParagraph");
let sentence = paragraph.innerText;

function countRepeatedWords(sentence) {
  let words = sentence
    .toLowerCase()
    .replace(/[.,;:!?]/g, "")
    .split(/\s+/);

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
  .slice(0, 12); // Top 12

Object.keys;
Object.values;
Object.entries;

console.log(sortedWords);

const wordCloud = document.getElementById("myWordCloud");

sortedWords.forEach(([word], index) => {
  const span = document.createElement("span");
  span.className = "word";
  span.innerText = word;
  span.style.fontSize = `${64 - index * 4}px`;
  span.style.color = `hsl(${index * 30}, 70%, 50%)`;
  wordCloud.appendChild(span);
});
