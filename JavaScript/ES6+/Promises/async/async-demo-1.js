const resolveAfter2Seconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I have resolve after my timeout");
    }, 2000);
  });
};

const resolveAfter5Seconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I have resolve after my timeout");
    }, 5000);
  });
};

const callAsync = async () => {
  const result = await resolveAfter2Seconds();
  console.log("Calling before 2 seconds");
  console.log(result);
  console.log("Calling After 2 seconds");

  console.log("Calling before 5 seconds");
  const result2 = await resolveAfter5Seconds();
  console.log(result2);
  console.log("Calling After 5 seconds");
};

console.log("Async", callAsync());
