/*
Login Simulation
Description:
Create a mock login system that checks if the input username and password match the stored
credentials (e.g., admin/1234). Print a welcome message if correct, or an error if not.
✅ Edge case: Empty input fields.
*/

const userName = "admin";
const password = "12343";

if (userName === "admin" && password === "1234") {
  console.log(`Hi, ${userName} welcome to your dashboard`);
} else {
  console.log("Error while logging in, please check credientials");
}
