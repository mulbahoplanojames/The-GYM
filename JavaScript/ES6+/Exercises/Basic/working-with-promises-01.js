// Note : Exercise 1
const voter = {
  name: "james",
  age: 2,
  location: {
    city: "kigali",
    district: "Gabaso",
  },
};

const promise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    const allowToVote = (voter) => {
      if (voter.age > 18) {
        resolve(`${voter.name} is permitted to vote`);
      }
      reject(`${voter.name} is not permitted to vote`);
    };

    allowToVote(voter);
  }, 1000);
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

// console.log("Promise", promise);

// Note: Exercise 1

// const myPromise = new Promise((resolve, reject) => {});
// console.log(myPromise);
