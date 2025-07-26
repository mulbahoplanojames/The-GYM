// 6. Evaluate a number and output whether it's positive, negative, or zero.

const isPositive = (number) => {
  if (number > 0) {
    return `${number} is positive`;
  } else if (number === 0) {
    return `${number} is zero`;
  } else {
    return `${number} is negative`;
  }
};

// 7. Determine a discount level: none (< $50), 10% ($50–$100), or 20% (>$100).
const giveDiscount = (amountBought) => {
  if (amountBought > 50 && amountBought < 100) {
    return `Your discount is ${amountBought - 0.1} from actual ${amountBought}`;
  } else if (amountBought > 50 && amountBought < 100) {
    return `Your discount is ${amountBought - 0.2} from actual ${amountBought}`;
  } else {
    return `You don't have a discount for ${amountBought} item buy more `;
  }
};

// 8. Check the day of the week and output if it's a weekday or weekend.
const checkDayOfWeek = (day) => {
  if (day <= 5) {
    return `It's a week day`;
  } else if (day > 5 && day <= 7) {
    return `It's a weekend`;
  } else {
    return "The day is not part of the days of the week";
  }
};
console.log(
  "🚀 ~ recap-02.js ~ checkDayOfWeek ~ checkDayOfWeek:",
  checkDayOfWeek(3)
);

// 9. Validate if both a username and password field are filled before login.
const userName = "james";
const password = "admin";

const validateLogin = (userName) => {
  return function (password) {
    if (userName === "james" && password === "admin") {
      return `Login Successful`;
    } else {
      return `Login failed, please provide a valid info`;
    }
  };
};

const user1 = validateLogin("james");
console.log("🚀 ~ recap-02.js ~ user1:", user1("admin"));

const user2 = validateLogin("paul");
console.log("🚀 ~ recap-02.js ~ user2:", user2("user"));
