const postContainer = document.querySelector(".postsContainer");
const loadPostButton = document.querySelector("#fetchPostButton");

const displayPostCard = (post) => {
  //   console.log(post);
  const poastHtml = `<div class="post">
    <h2>${post.title}</h2>
    <p>${post.body}</p>
</div>`;
  postContainer.insertAdjacentHTML("beforeend", poastHtml);
};

loadPostButton.addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // console.log(data);

    postContainer.innerHTML = "";
    data.slice(0, 6).forEach((post) => {
      displayPostCard(post);
    });
  } catch (error) {
    console.log("Error loading post", error);
  }
});
