const postXhr = new XMLHttpRequest();

postXhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
postXhr.responseType = "json";

postXhr.onload = () => {
  if (postXhr.status === 200 && postXhr.readyState === 4) {
    console.log(postXhr.response);
  } else {
    console.log(postXhr.status);
  }
};

postXhr.onerror = () => {
  console.log("error");
};

postXhr.onabort = () => {
  console.log("abort");
};

postXhr.send();
