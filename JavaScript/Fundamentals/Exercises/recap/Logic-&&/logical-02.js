// 6. Display cart items if cart is not empty.

function displayCartItems(cart) {
  return cart.length > 0 && cart.map((item) => item.name);
}

const userCart = [
  {
    id: "product1",
    name: "Iphone",
    price: 1200,
    quantity: 1,
  },
  {
    id: "product2",
    name: "Laptop",
    price: 500,
    quantity: 5,
  },
];
console.log(
  "🚀 ~ logical-02.js ~ displayCartItems ~ displayCartItems:",
  displayCartItems(userCart)
);

// 7. Render comments section if user is signed in.

// 8. Update score only if game is active.
// 9. Send data only if online.
// 10. Load page only if token exists.
