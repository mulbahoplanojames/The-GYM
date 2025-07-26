/*
Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

var facebookProfile = {
  name: "Oplano James",
  friends: 55,
  messages: [
    "Hello James",
    "What are you doing?",
    "How was school today",
    "Please come for practice",
    "Your location",
  ],
  postMessage: function (message) {
    this.messages.push(message);
  },
  deleteMassage: function (index) {
    this.messages.splice(index, 1);
  },
  addFriend: function () {
    this.friends += 1;
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0) this.friends -= 1;
  },
};

// facebookProfile.postMessage("We are here");
// facebookProfile.deleteMassage(0);
// facebookProfile.addFriend();
// facebookProfile.removeFriend();
// console.log(facebookProfile.friends);
// console.log(facebookProfile.messages);
//

// var donuts = [
//   { type: "Jelly", cost: 1.22 },
//   { type: "Chocolate", cost: 2.45 },
//   { type: "Cider", cost: 1.59 },
//   { type: "Boston Cream", cost: 5.99 },
// ];

// donuts.forEach((donut) => {
//   console.log(`${donut.type} donuts cost $${donut.cost} each`);
// });

const products = {
  name: "Iphoe",
  price: 12.0,
  color: "red",
  brand: "Apple",
};

// console.log(Object.keys(products));
// console.log(Object.values(products));

// for (let product in products) {
//   console.log(products[product]);
// }

const { name, price, color } = products;
// console.log(name, price, color);
// console.log(products.__proto__);
console.log("age" in products);
