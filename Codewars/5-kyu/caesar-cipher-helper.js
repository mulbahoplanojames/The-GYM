class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encode(str) {
    return str
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char >= "A" && char <= "Z") {
          let code = char.charCodeAt(0);
          let shifted = ((code - 65 + this.shift) % 26) + 65;
          return String.fromCharCode(shifted);
        }
        return char;
      })
      .join("");
  }

  decode(str) {
    return str
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char >= "A" && char <= "Z") {
          let code = char.charCodeAt(0);
          let shifted = ((code - 65 - this.shift + 26) % 26) + 65;
          return String.fromCharCode(shifted);
        }
        return char;
      })
      .join("");
  }
}

// Example usage:
var c = new CaesarCipher(5);
console.log(c.encode("Codewars")); // 'HTIJBFWX'
console.log(c.decode("BFKKQJX")); // 'WAFFLES'
