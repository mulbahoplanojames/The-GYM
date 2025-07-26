/*
isPalindrome(str) using one loop & conditionals (no built‑ins like reverse).
*/

const isPalindrome = (str) => {
  // solution one
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    reverseStr += str[i];
  }

  //   console.log("🚀 ~ isPalindrome.js ~ isPalindrome ~ reverseStr:", reverseStr);

  //   if (reverseStr == str) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // solution two
  const rever = str.split("").reverse().join("");
  console.log("🚀 ~ isPalindrome.js ~ isPalindrome ~ rever:", rever);
  if (rever == str) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome("levelsa"));
