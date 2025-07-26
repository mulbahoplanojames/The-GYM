// 6. Show or hide an element by toggling a `visible` flag.
function toggleVisible(visible) {
  return visible ? `display-block` : `display-none`;
}
console.log(
  "🚀 ~ tenary-02.js ~ toggleVisible ~ toggleVisible:",
  toggleVisible(false)
);

// 7. Assign a default value if a user input is null.
function assignNull(input) {
  const defaultValue = input === null ? "I am new here" : input;

  return defaultValue;
}
console.log(
  "🚀 ~ tenary-02.js ~ assignNull ~ defaultValue:",
  assignNull("james")
);

// 8. Set an emoji icon based on user mood (happy/sad).
function setEmoji(mood) {
  return mood === "happy " ? `😄 Happy` : mood === "sad" ? `😞 Sad` : `🤔`;
}
console.log("🚀 ~ tenary-02.js ~ setEmoji ~ setEmoji:", setEmoji("sa"));

// 9. Change a media player button label between "Play" and "Pause".

function changePlayerLable(toggle) {
  return toggle ? `<button>play<button/>` : `<button>pause<button/>`;
}
console.log(
  "🚀 ~ tenary-02.js ~ changePlayerLable ~ changePlayerLable:",
  changePlayerLable(true)
);
