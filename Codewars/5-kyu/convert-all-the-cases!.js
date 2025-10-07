function changeCase(identifier, targetCase) {
  // Validate target case
  // Check for invalid patterns
  // Split into words
  // Validate words
  // Convert to target case

  // Validate target case
  if (!["camel", "snake", "kebab"].includes(targetCase)) return undefined;
  if (identifier === "") return "";

  // Check for invalid patterns
  const hasInvalidMix =
    (/[A-Z]/.test(identifier) && /[-_]/.test(identifier)) ||
    (/-/.test(identifier) && /_/.test(identifier));
  if (hasInvalidMix) return undefined;

  // Split into words
  let words = [];
  if (identifier.includes("_")) {
    words = identifier.split("_");
  } else if (identifier.includes("-")) {
    words = identifier.split("-");
  } else {
    words = identifier.split(/(?=[A-Z])/).map((w) => w.toLowerCase());
  }

  // Validate words
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
