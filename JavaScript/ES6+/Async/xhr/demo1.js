/**
 * Making a basic request
You’re building a page that needs to fetch a list of users from a server when the page loads.
What steps would you follow to create and send an XHR request and know when the response is ready?
 */

const demo1Button = document.querySelector(".demo1");
const demo2Button = document.querySelector(".demo2");
const demo3Button = document.querySelector(".demo3");
const demo4Button = document.querySelector(".demo4");

demo1Button.addEventListener("click", () => {
  const usersXhr = new XMLHttpRequest();

  usersXhr.open("GET", "https://dummyjson.com/users");
  usersXhr.responseType = "json";

  usersXhr.onload = () => {
    if (usersXhr.status === 200) console.log(usersXhr.response);
  };

  usersXhr.send();
});

/** 
 * Understanding request states
While testing an API call, you notice your logic runs before the data is available.
How would you determine when the XHR request has fully completed and is safe to use?
*/

demo2Button.addEventListener("click", () => {
  const productXhr = new XMLHttpRequest();
  console.log(productXhr.readyState);

  productXhr.open("GET", "https://dummyjson.com/products");
  productXhr.responseType = "json";

  productXhr.onload = () => {
    if (productXhr.readyState === 4 && productXhr.status === 200) {
      console.log(productXhr.response);
    }
  };

  productXhr.send();
});

/**
 * Handling success vs failure
A server sometimes responds successfully and sometimes returns an error (like 404 or 500).
How would you distinguish between a successful and a failed XHR request?
 */

demo3Button.addEventListener("click", () => {
  const failedXhr = new XMLHttpRequest();

  failedXhr.open("GET", "https://dummyjson.com/produc");
  failedXhr.responseType = "json";

  failedXhr.onload = () => {
    if (
      failedXhr.status === 200 &&
      failedXhr.status < 400 &&
      failedXhr.readyState === 4
    ) {
      console.log(failedXhr.response);
    } else {
      console.log(
        `Failed to fetch data : ${failedXhr.status} -- ${failedXhr.statusText}`,
      );
    }
  };

  failedXhr.send();

  failedXhr.onerror = () => {
    console.log("Network Error: Failed to fetch Data");
  };

  //   console.log(failedXhr);
});

/**
 * Multiple XHR requests
You need to fetch user data and then fetch that user’s orders, but the second request depends on the first one.
How would you organize your XHR logic to avoid race conditions or messy nesting?
 */

// demo4Button.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();
//   const userTodoXhr = new XMLHttpRequest();

//   xhr.open("GET", "https://dummyjson.com/users");
//   xhr.responseType = "json";

//   xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status < 400 && xhr.readyState === 4) {
//       console.log("Data", xhr.response);
//       //   console.log(xhr.response.users[0].id);
//       const randomId = Math.floor(Math.random() * 10);

//       userTodoXhr.open(
//         "GET",
//         `https://dummyjson.com/todos/${xhr.response.users[randomId].id}`,
//       );

//       userTodoXhr.responseType = "json";

//       userTodoXhr.onload = () => {
//         if (
//           userTodoXhr.status >= 200 &&
//           userTodoXhr.status < 400 &&
//           userTodoXhr.readyState === 4
//         ) {
//           console.log("User Todo", userTodoXhr.response);
//         } else {
//           console.log(
//             `Error fetching User Todo: ${userTodoXhr.status} -- ${userTodoXhr.statusText}`,
//           );
//         }
//       };

//       userTodoXhr.send();
//     } else {
//       console.log(`Error Fetching data ${xhr.status}`);
//     }
//   };

//   xhr.send();
// });

// Note: Refactor

function fetchUser(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/users");
  xhr.responseType = "json";

  const randomId = Math.floor(Math.random() * 10);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      callback(null, xhr.response.users[randomId]);
    } else {
      callback("Failed to fetch users");
    }
  };

  xhr.send();
}

function fetchUserTodos(userId) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://dummyjson.com/todos/${userId}`);
  xhr.responseType = "json";

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      console.log("User Todo", xhr.response);
    }
  };

  xhr.send();
}

demo4Button.addEventListener("click", () => {
  fetchUser((err, user) => {
    if (!err) fetchUserTodos(user.id);
  });
});

/**
* Loading indicators
While fetching data from a slow server, the UI feels frozen.
How would you use XHR events to show and hide a loading indicator at the right moments?
 */

/**
* Timeouts and network issues
Some users have unstable internet connections.
How would you detect when an XHR request takes too long or fails due to a network problem, and how should the app respond?
 */
