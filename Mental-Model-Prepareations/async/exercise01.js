/** 
 * 1. Implement a timeout for an asynchronous fetch request. If the request takes longer than(5 milliseconds), it should be aborted.  
    
    ```jsx
    https://jsonplaceholder.typicode.com/users
    ```
*/

const contoller = new AbortController();
const singal = contoller.abort();

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal,
    });
    const data = await response.json();
    console.log(`Data ${data}`);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log(`request take long time ${error}`);
    } else {
      console.log("Error fetching data");
    }
  }
};

fetchUsers();

setTimeout(() => {
  contoller.abort();
}, 2000);
