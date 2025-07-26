/*
Directions:
Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.
*/

var countdown = 60;

while (countdown >= 0) {
  if (countdown === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (countdown === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (countdown === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (countdown === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (countdown === 6) {
    console.log("Main engine start");
  } else if (countdown === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log(`T-${countdown} seconds`);
  }
  countdown--;
}
