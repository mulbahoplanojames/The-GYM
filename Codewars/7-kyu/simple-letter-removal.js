function solve(s, k) {
  let str = s.split("");

  for (let i = 0; i < 26 && k > 0; i++) {
    const char = String.fromCharCode(97 + i); // 'a' to 'z'

    for (let j = 0; j < str.length && k > 0; j++) {
      if (str[j] === char) {
        str[j] = ""; // Mark for removal
        k--;
      }
    }
  }

  // Filter out empty strings and join
  return str.filter((c) => c !== "").join("");
}

console.log(solve("abracadabra", 1)); // 'bracadabra'
console.log(solve("abracadabra", 2)); // 'brcadabra'
console.log(solve("abracadabra", 6)); // 'rcdbr'
console.log(solve("abracadabra", 8)); // 'rdr'
console.log(solve("abracadabra", 50)); // ''
