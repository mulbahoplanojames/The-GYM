const worker = new Worker("/static-method-with-async/worker.js");

worker.postMessage("start");

worker.onmessage = (message) => {
  console.log(message.data);
};
