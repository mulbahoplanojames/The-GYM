/*
Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

const user = {
  name: "James",
  surname: "Oplano",
};

console.log(user.name);

user.name = "Mulbah";

console.log(user.name);
console.log("-------------------------");

delete user.name;

console.log(user);
