function findAdded(st1, st2) {
  let arr1 = [...st1];
  let arr2 = [...st2];
  for (let ch of arr1) {
    let idx = arr2.indexOf(ch);
    if (idx !== -1) arr2.splice(idx, 1);
  }
  return arr2.sort().join("");
}

// Example test cases
console.log(findAdded("4455446", "447555446666")); // '56667'
console.log(findAdded("44554466", "447554466")); // '7'
console.log(findAdded("9876521", "9876543211")); // '134'
console.log(findAdded("678", "876")); // ''
console.log(findAdded("678", "6")); // ''
