/*
uppercaseLong(words) — return only words with length > 3, upper‑cased.
*/

function uppercaseLong(words) {
  //   console.log("🚀 ~ uppercaseLong.js ~ uppercaseLong ~ words:", words);

  // first solution
  for (let i = 0; i < words.length; i++) {
    // console.log(words[i].length);
    if (words[i].length > 3) {
      console.log(words[i].toUpperCase());
    }
  }
}

uppercaseLong(["hi", "javascript", "fun"]);
