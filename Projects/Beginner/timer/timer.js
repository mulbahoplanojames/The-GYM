const startTimerButton = document.querySelector(".start-timer");
const stopTimerButton = document.querySelector(".stop-timer");
const resetTimerButton = document.querySelector(".reset-timer");
const timerOutput = document.querySelector(".timer-output");

let intervalId;
let timeLeft = 1500;

const updateTimerOutput = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timerOutput.textContent = `${String(minutes).padStart(2, "0")} : ${String(
    seconds
  ).padStart(2, "0")}`;

  console.log(minutes, seconds);
};
// updateTimerOutput();

const startInterval = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      timeLeft--;
      updateTimerOutput();

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        timeLeft = 1500;
        intervalId = null;
        updateTimerOutput();
      }
    }, 1000);
  }
};

const stopInterval = () => {
  if (intervalId) {
    clearInterval(intervalId);
    updateTimerOutput();
    intervalId = null;
  }
};

const resetInterval = () => {
  stopInterval();
  timeLeft = 1500;
  updateTimerOutput();
};

startTimerButton.addEventListener("click", () => {
  startInterval();
});

stopTimerButton.addEventListener("click", () => {
  startInterval();
});

resetTimerButton.addEventListener("click", () => {
  resetInterval();
});
