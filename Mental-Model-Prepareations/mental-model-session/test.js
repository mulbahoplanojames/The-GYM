const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Promise has been resolve"), 5000);
});

// const getData = () => {
//   console.log("To be printed out first");
//   promise.then((result) => {
//     console.log(result);
//   });
// };

// getData();

// using async/await
const getDataAsync = async () => {
  console.log("To me i am new");
  const result = await promise;
  console.log("To be printed out first");
  console.log(result);
};

getDataAsync();
