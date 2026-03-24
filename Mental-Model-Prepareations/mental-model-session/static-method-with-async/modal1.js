const controller = new AbortController();
const signal = controller.signal;

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        signal,
      },
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

setTimeout(() => {
  controller.abort();
}, 500);
