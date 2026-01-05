const exerciseOne = () => {
  const coffeeOrder = new Promise((resolve, reject) => {
    let isMachineWorking = true;

    if (isMachineWorking) {
      resolve("Latte");
    } else {
      reject("Out of Milk");
    }
  });

  coffeeOrder
    .then((coffee) => {
      console.log("Yum! I am drinking my " + coffee);
    })
    .catch((reason) => {
      console.log("Oh no, I can't drink coffee because: " + reason);
    });
};
// exerciseOne();

const exerciseTwo = () => {
  // a promise that resolves with the message "Success!" after 2 seconds.
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Success");
    }, 2000);
  });
};
// exerciseTwo();

const exerciseThree = () => {
  // Create a promise that resolves with the number 5. Chain .then() to multiply it by 2,
  // then chain another .then() to add 10 to the result.
  return new Promise((resolve, reject) => {
    resolve(5);
  })
    .then((data) => data * 2)
    .then((data) => console.log("Result from chaning :", data + 10));
};
// exerciseThree();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("failed to load data");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success, data fetch successfully");
  }, 2000);
});

const allPromises = Promise.any([promise1, promise2]);
console.log(allPromises);
setTimeout(() => {
  console.log(allPromises);
}, 3000);
