const getFastPosts = async () => {
  try {
    const result = Promise.any([
      fetch("https://dummyjson.com/posts"),
      fetch("https://this-may-not-exist.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);
    if (!(await result).ok) {
      throw new Error();
    }
    return (await result).json();
  } catch (error) {
    console.log(error);
  }
};

getFastPosts().then((posts) => {
  console.log(posts);
});
