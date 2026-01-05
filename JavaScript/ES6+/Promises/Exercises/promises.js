console.log("Hello i am jerry, have you see tom");

setTimeout(() => {
  console.log("I am a here Jerry");
}, 0);

const MyResponse = new Promise((resolve, reject) => {
  resolve("I saw him a few minutes ago");
});

MyResponse.then((value) => {
  console.log(value);
});

console.log("Sam reply: I am new here jerry ");
