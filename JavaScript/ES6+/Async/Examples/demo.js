// This is a demo file for async examples

const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
};

asyncFunction().then((result) => {
  console.log(result);
});
