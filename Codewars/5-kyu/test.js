function changeCase(identifier, targetCase) {
  // Validate target case
  // Check if target case is one of the valid options
  // If not, return undefined
  if (!["camel", "snake", "kebab"].includes(targetCase)) return undefined;

  // If the identifier is empty, return an empty string
  if (identifier === "") return "";

  // Check for invalid patterns
  // Check if the identifier contains a mix of underscore and hyphen
  // If so, return undefined
  const hasInvalidMix =
    (/[A-Z]/.test(identifier) && /[-_]/.test(identifier)) ||
    (/-/.test(identifier) && /_/.test(identifier));
  if (hasInvalidMix) return undefined;

  // Split into words
  let words = [];
  // Check if the identifier contains underscore
  // If so, split by underscore
  if (identifier.includes("_")) {
    words = identifier.split("_");
  }
  // Check if the identifier contains hyphen
  // If so, split by hyphen
  else if (identifier.includes("-")) {
    words = identifier.split("-");
  }
  // If neither underscore nor hyphen is present
  // Split by uppercase letter
  else {
    words = identifier.split(/(?=[A-Z])/).map((w) => w.toLowerCase());
  }

  // Validate words
  // Check if any word contains non-alphanumeric characters
  // If so, return undefined
  if (words.some((word) => !/^[a-z0-9]*$/.test(word))) return undefined;

  // Convert to target case
  return {
    camel: words
      .map((w, i) => (i ? w[0].toUpperCase() + w.slice(1) : w))
      .join(""),
    snake: words.join("_"),
    kebab: words.join("-"),
  }[targetCase];
}

console.log(changeCase("snakeCase", "snake")); // "snake_case"
console.log(changeCase("some-lisp-name", "camel")); // "someLispName"
console.log(changeCase("map_to_all", "kebab")); // "map-to-all"
console.log(changeCase("doHTMLRequest", "kebab")); // "do-h-t-m-l-request"
console.log(changeCase("invalid-inPut_bad", "kebab")); // undefined
console.log(changeCase("valid-input", "huh???")); // undefined
console.log(changeCase("", "camel")); // ""
