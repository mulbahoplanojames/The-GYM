function likes(names) {
  if (names.length < 1) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  if (names.length > 1 && names.length <= 2) {
    return `${names.join(" and ")} like this`;
  }
  if (names.length > 2 && names.length <= 3) {
    const firstLike = names[0];
    return `${firstLike}, ${names.slice(1, 3).join(" and ")} like this`;
  }

  if (names.length >= 4) {
    const firstLike = names[0];
    const secondLike = names[1];
    return `${firstLike}, ${secondLike} and ${
      names.slice(2).length
    } others like this`;
  }
}

console.log(likes([]));
console.log(likes(["Abdalla"]));
console.log(likes(["Mary", "Peter"]));
console.log(likes(["James", "Grace", "Wilma"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Steven", "Princess"]));

/*
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
