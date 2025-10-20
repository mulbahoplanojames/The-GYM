/*
Note : Creating a Simple Promise
Create a Promise that resolves with the message "Task completed!" after 2 seconds using setTimeout.
👉 Log the message once it resolves.
*/

const completeTask = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task Completed");
  }, 2000);
});

completeTask.then((data) => {
  console.log(data);
});

/*
Note
Promise Rejection
Create a Promise that rejects with "Error: Something went wrong!" after 1 second.
👉 Handle the rejection using .catch().
*/

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 1000);
});

errorPromise.catch((error) => console.log(error));

/*
Note
Promise States Practice
Write code that logs "Pending...", then resolves a Promise after 2 seconds with "Done!".
👉 Observe the difference between pending and fulfilled states.
*/

const pendingPromise = new Promise((resolve, reject) => {
  console.log("Pending.....");
  setTimeout(() => {
    resolve("Done!");
  }, 2000);
});

console.log(pendingPromise);
pendingPromise.then((data) => {
  console.log(data);
});

/*
Note:
Chaining Promises
Create a Promise chain that:
Resolves to 2
Multiplies the result by 3
Adds 5
Logs the final result (11).
*/

const promiseChain = new Promise((resolve, reject) => {
  resolve(2);
});

promiseChain
  .then((result) => {
    return new Promise((resolve) => {
      resolve(result * 3);
    });
  })
  .then((result) => {
    console.log(result + 5);
  });

/*
Note:
Using then() and catch()
Create a function checkNumber(num) that returns a Promise:
Resolves if num is even
Rejects if num is odd
👉 Call it with both even and odd values to test.
*/

const checkNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is even`);
    } else {
      reject(`${number} is Odd`);
    }
  });
};

checkNumber(2).then((result) => {
  console.log(result);
});

checkNumber(5).catch((error) => {
  console.log(error);
});

/*
Note:
Promise.all() Practice
Create three Promises that resolve with different messages after different timeouts.
👉 Use Promise.all() to log all messages once every promise is fulfilled.
*/

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise One resolve");
  }, 3000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Two resolve");
  }, 3000);
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Three resolve");
  }, 3000);
});

console.log(Promise.all([promiseOne, promiseTwo, promiseThree]));

/*
Note: 
Promise.race() Practice
Create two Promises:
One resolves after 2 seconds
One rejects after 1 second
👉 Use Promise.race() and log which one finishes first.
*/

/*
Note:
Async/Await + Try/Catch
Write an async function that:
Awaits a Promise that resolves after 2 seconds with "Data fetched".
Catches and logs any possible errors.
*/

/*
Note: 
Chaining Async Functions (Realistic Example)
Write three async functions:
getUser() → returns a user object after 1s
getPosts(userId) → returns a list of posts after 1.5s
showPostTitles(posts) → logs all post titles
Chain them using await so they run sequentially.
*/

/*
Note:

*/

/*
Note:

*/

/*
Note:

*/

/*
Note:

*/
