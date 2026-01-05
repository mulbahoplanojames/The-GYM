/*
1. Convert callback to async/await
Write a function that uses setTimeout and a callback, then rewrite it to use a Promise + async/await.
*/

const timeOutFunction = (callback) => {
  console.log(callback());
};

const timeOutCallback = () => {
  setTimeout(() => {
    console.log("This uses a callback method");
  }, 2000);
};

// timeOutCallback();

// rewrite using promises
const callBackPromiseConvert = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is converting a callback to a normal promise object");
  }, 5000);
});

const asyncPromiseCaller = async () => {
  const data = await callBackPromiseConvert;
  console.log(data);
};

// asyncPromiseCaller();

/*
2. Delay function
Create a function called wait(ms) that pauses execution for a given number of milliseconds using async/await.
*/

const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This pauses execution for a few seconds");
    }, ms);
  });
};

const resumeTask = async () => {
  const data = await wait(6000);
  console.log(data);
};
// resumeTask();

/*
3. Simple async return
Write an async function that returns a resolved value and display it using await.
*/

const simpleAsync = async () => {
  const response = new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is resolving a promise");
    }, 2000);
  });

  const data = await response;
  console.log(data);
};
// simpleAsync();

/*
4. Handle errors
Make a Promise that may reject randomly and catch errors properly using try/catch with async/await.
*/

const promiseRejectRandomly = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Failed to fetch data");
    }, 2000);
  });
};

const catchPromiseError = async () => {
  try {
    const response = await promiseRejectRandomly();
    const data = await response;
    console.log("Server error", data);
  } catch (error) {
    console.log(error);
  }
};

// catchPromiseError();
