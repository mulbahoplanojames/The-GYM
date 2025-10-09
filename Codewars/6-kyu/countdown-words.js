function longestWord(letters) {
  // Assume 'words' array is globally available
  // Find max length
  // Filter longest words & sort alphabetically
  // Helper function: can we form 'word' from 'letters'?

  // Assume 'words' array is globally available
  let validWords = [];

  for (let word of words) {
    if (canForm(word, letters)) validWords.push(word);
  }

  if (validWords.length === 0) return null;

  // Find max length
  let maxLen = Math.max(...validWords.map((w) => w.length));

  // Filter longest words & sort alphabetically
  return validWords.filter((w) => w.length === maxLen).sort();
}

// Helper function: can we form 'word' from 'letters'?
function canForm(word, letters) {
  let available = letters.split("");

  for (let ch of word) {
    let index = available.indexOf(ch);
    if (index === -1) return false;
    // use up that letter
    available.splice(index, 1);
  }

  return true;
}

letters = "DVAVPALEM";
// longest word = ["PALMED", "VALVED", "VAMPED"]
