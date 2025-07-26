/*
Multiply numeric property values by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
*/

const multiplyNumeric = (menu) => {
  for (let props in menu) {
    if (typeof menu[props] === "number") {
      menu[props] *= 2;
    }
  }
  console.log(menu);
};

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);
