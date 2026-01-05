setTimeout(() => {
  console.log("Timeout function");
}, 5000);

const firstFunction = (secondFunction) => {
  console.log("first function");
  secondFunction();
};

firstFunction(function secondFunction() {
  console.log("second function");
});

let value = 1;

// Synchronous callbacks

function doSomething(callback) {
  callback();
}

doSomething(() => {
  value = 2;
});

console.log(value);
console.log("---------------------------------------------");

// Asynchronous callbacks

let value2 = 1;

function doSomethingAsync(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

doSomethingAsync(() => {
  value2 = 3;
});

console.log(value2);

// Working with callbacks hell

const cart = [
  {
    name: "Product 1",
    price: 100,
  },
  {
    name: "Product 2",
    price: 200,
  },
  {
    name: "Product 3",
    price: 300,
  },
];

// const proceedToPayment = (order, callback) => {};
// const showOrderSummary = (order, callback) => {};
// const updateInventory = (order, callback) => {};
// const sendConfirmationEmail = (order, callback) => {};
// const displayOrderConfirmation = (order, callback) => {};
// const order = {
//   id: 1,
//   items: cart,
//   total: 0,
//   status: "pending",
// };
// const createOrder = (cart) => {
//   proceedToPayment(order, (order) => {
//     showOrderSummary(order, (order) => {
//       updateInventory(order, (order) => {
//         sendConfirmationEmail(order, (order) => {
//           displayOrderConfirmation(order, (order) => {
//             console.log(order);
//           });
//         });
//       });
//     });
//   });
//   return order;
// };

// createOrder(cart);
// const addToCart = (product, callback) => {
//   setTimeout(() => {
//     cart.push(product);
//     callback();
//   }, 1000);
// };

// const getCart = (callback) => {
//   setTimeout(() => {
//     callback(cart);
//   }, 1000);
// };

// addToCart({ name: "Product 4", price: 400 }, () => {
//   getCart((cart) => {
//     console.log(cart);
//   });
// });

Promise.resolve()
  .then(() => {
    throw "boom";
  })
  .catch((err) => console.log(err));
