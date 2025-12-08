function isKiss(words) {
  const wordCount = words.split(" ").length;
  const maxLength = Math.max(...words.split(" ").map((word) => word.length));

  return maxLength > wordCount ? "Keep It Simple Stupid" : "Good work Joe!";
}

console.log(
  isKiss("jump always mostly is touchy dancing choice is pineapples mostly"),
);
