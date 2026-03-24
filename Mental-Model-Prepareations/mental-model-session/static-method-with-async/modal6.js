/** 
 * ### 

    You are calling an external API that sometimes fails due to network issues.

    To improve reliability, you need to retry the request up to 3 times, waiting longer between each attempt.

    ### **Task**

    Implement a function `fetchWithRetry(url, retries)` that:

    - Uses `fetch`
    - Retries the request **up to 3 times**
    - Waits `500ms`, `1000ms`, `2000ms` between retries
    - Throws an error if all attempts fail

    ### **What This Tests**

    - Promises & async/await
    - Error handling
    - Timers (`setTimeout`)
    - Control flow in async code
*/

const fetchWithRetry = async (url, retries = 3) => {
  const delays = [500, 1000, 2000];

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      if (attempt === retries - 1) {
        throw new Error(
          `All ${retries} attempts failed. Last error: ${error.message}`,
        );
      }

      await new Promise((resolve) => setTimeout(resolve, delays[attempt]));
    }
  }
};

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Success:", data))
  .catch((error) => console.log("Final error:", error.message));
