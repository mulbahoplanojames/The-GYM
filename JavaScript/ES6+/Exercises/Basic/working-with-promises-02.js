// // Note : Fetch users

const db = [
  { name: "james mulbah", email: "james@gmail.com", role: "admin" },
  { name: "sumo Lablah", email: "sumo@gmail.com", role: "user" },
  { name: "grace Weah", email: "grace@gmail.com", role: "visitor" },
  { name: "princess Weedor", email: "princess@gmail.com", role: "author" },
];

const fetchUsers = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (db.length > 0) {
      resolve(db);
    } else {
      reject("Failed to fetch users");
    }
  }, 2000);
});

const H = new Promise((resolve, reject) => {});
// console.log(H);

// Example usage:
fetchUsers
  .then((users) => {
    console.log("User fetch Successfully");
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });

// Async function to get user by name
const getUser = async (username) => {
  try {
    const users = await fetchUsers;
    return users.find((user) => user.name === username);
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Example usage:
getUser("james mulbah").then((user) => console.log(user));

console.log(new Promise());

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 1 resolve ${1 + 1}`);
  }, 1000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolve ${2 + 2}`);
    // reject("Promise 2 reject");
  }, 1000);
});

Promise.all([promiseOne, promiseTwo])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// Note  Promise.allSettled
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, " promise reject foo")
);
const promise3 = Promise.resolve(42);

Promise.allSettled([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// Note: Promise.any()
const p1 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error from p1"), 100)
);
const p2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Success from p2"), 200)
);
const p3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Success from p3"), 50)
);

Promise.any([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

const p4 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error from p4"), 100)
);
const p5 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error from p5"), 200)
);

// Promise.any([p4, p5])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const pp1 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error from ppp--0"), 100)
);
const pp2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("resolve from p5"), 200)
);

Promise.race([pp1, pp2])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// Example: Structured Promise for loading state
const testingPromise = new Promise((resolve, reject) => {
  let isLoading = false;

  console.log("loading");

  setTimeout(() => {
    isLoading = true;
    if (isLoading) {
      resolve("Welcome");
    }
  }, 2000);
});

testingPromise.then((message) => {
  console.log(message);
});
