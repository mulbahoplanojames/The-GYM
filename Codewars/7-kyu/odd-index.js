// Find the index of the word that has a different length parity than the majority
// Count even length words
// Find the odd word (the one that doesn't match the majority parity)
// If no odd word found, return false
// Check if any number in the array matches the odd word's index

function oddBall(arr) {
  const words = arr
    .map((val, index) => ({ val, index }))
    .filter((x) => typeof x.val === "string");

  if (words.length === 0) return false;

  const evenCount = words.filter((x) => x.val.length % 2 === 0).length;
  const isEvenMajority = evenCount > words.length / 2;

  const oddWord = words.find(
    (x) => (x.val.length % 2 === 0) !== isEvenMajority
  );

  if (!oddWord) return false;

  return arr.some((x) => typeof x === "number" && x === oddWord.index);
}
console.log(
  oddBall([
    "even",
    4,
    "even",
    7,
    "even",
    55,
    "even",
    6,
    "even",
    10,
    "odd",
    3,
    "even",
  ])
);

oddBall([
  "even",
  4,
  "even",
  7,
  "even",
  55,
  "even",
  6,
  "even",
  9,
  "odd",
  3,
  "even",
]);
