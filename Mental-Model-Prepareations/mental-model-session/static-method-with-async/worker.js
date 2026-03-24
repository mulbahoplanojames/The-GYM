self.onmessage = (message) => {
  //   console.log(message.data);

  if (message.data === "start") {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        self.postMessage(i);
      }, i * 1000);
    }
  }
};
