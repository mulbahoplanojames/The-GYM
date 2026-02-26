/**
 // Note: 3️⃣ Extra Property Check

Create a type Car with:
brand
model
year
Then create an object with an additional property color.
What happens?
 */

const Car: { brand: string; model: number; year: number } = {
  brand: "GLE-239",
  model: 2025,
  year: 1024,
};
// Car.color = "red";

/**
 // Note: 4️⃣ Nested Object

Define an object user with:
username (string)
email (string)
address object containing:
city
country
zipCode
 */
const User: {
  username: string;
  email: string;
  address: {
    city: string;
    country: string;
    zipCode: string;
  };
} = {
  username: "Oplano James",
  email: "mulbah@gmail.com",
  address: {
    city: "Kigali",
    country: "Rwanda",
    zipCode: "00000",
  },
};
console.log(User.address);

/**
 // Note: 5️⃣ Optional Properties

Create a Product type with:
id
name
price
discount (optional)

Then create multiple product objects (with and without discount).
 */
const Product: {
  id: number;
  name: string;
  price: number;
  discount?: number;
} = {
  id: 1,
  name: "Iphone 11pro",
  price: 700.99,
  discount: 15,
};

/**
 // Note: 6️⃣ Readonly Properties

Create a Config object type where:
apiKey cannot be modified
baseUrl cannot be modified
timeout can be modified
Try changing values.
 */

//Note Config Object with Readonly Properties
const Config: {
  readonly apiKey: string;
  readonly baseUrl: string;
  timeout: number;
} = {
  apiKey: "your-api-key",
  baseUrl: "https://example.com",
  timeout: 5000,
};
// Config.baseUrl = "https://v1/example.com";
console.log(Config.apiKey);

/**
 // Note: 7️⃣ Method Inside Object

Create a Person type with:
firstName
lastName
getFullName() method that returns a string
Implement an object following this type.
 */

const Person: {
  firstName: string;
  lastName: string;
  getFullName: () => void;
} = {
  firstName: "Oplano",
  lastName: "James",
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

console.log(Person);

/** 
 
 //Note: 8️⃣ Function as Property

Create an object type Calculator with:
add
subtract
multiply
divide
Each should be a function that takes two numbers.
*/

const Calculator: {
  add: (num1: number, num2: number) => number;
  subtract: (num1: number, num2: number) => number;
  multiply: (num1: number, num2: number) => number;
  divide: (num1: number, num2: number) => number;
} = {
  add(num1, num2) {
    const result = num1 + num2;
    return result;
  },
  subtract(num1, num2) {
    const result = num1 - num2;
    return result;
  },
  multiply(num1, num2) {
    const result = num1 * num2;
    return result;
  },
  divide(num1, num2) {
    const result = num1 / num2;
    return result;
  },
};
console.log(Calculator.add(12, 3));
console.log(Calculator.multiply(12, 3));
console.log(Calculator.subtract(12, 3));

/** 
 //Note: 9️⃣ Array Inside Object

Create a BlogPost type with:
title
content
tags (array of strings)
comments (array of objects with user and message)
*/

const BlogPost: {
  title: string;
  content: string;
  tags: string[];
  comments: {
    user: {
      id: number;
      name: string;
    };
    message: string;
  }[];
} = {
  title: "The Gym next Cohort",
  content: "The Gym will......",
  tags: ["Coding", "Gym Stuff", "learning"],
  comments: [
    {
      user: {
        id: 1,
        name: "james",
      },
      message: "I am willing to joing the Gym",
    },
  ],
};

/**
 // Note: 🔟 Object Inside Array

Create an array employees where each item has:
id
name
position
salary
 */

const employees: {
  id: number;
  name: string;
  position: string;
  salary: number;
}[] = [
  {
    id: 1,
    name: "James",
    position: "Software Developer",
    salary: 1200,
  },
  {
    id: 2,
    name: "MAry",
    position: "UI/UX",
    salary: 900,
  },
];

/** 
 //Note: 1️⃣1️⃣ Union Types in Object

Create a Payment type where:
amount
status can only be "pending" | "completed" | "failed" 
*/

const Payment: {
  amount: number;
  status: "pending" | "completed" | "failed";
} = {
  amount: 1500,
  status: "completed",
};

/** 
 // Note: 1️⃣2️⃣ Literal Types in Object

Create a ThemeSettings object type where:
theme can only be "light" or "dark"
fontSize can only be 12 | 14 | 16 | 18
*/

const ThemeSettings: {
  theme: "light" | "dark";
  fontSize: 12 | 14 | 16 | 18;
} = {
  theme: "light",
  fontSize: 12,
};

//! Level 4: Real - World Practice
/** 
 // Note: 
1️⃣3️⃣ E-Commerce Order System

Create a type Order with:
orderId
customer (object with name + email)
items (array of objects: productId, quantity, price)
totalAmount
status ("processing" | "shipped" | "delivered")
*/

const Orders: {
  orderId: number;
  customer: {
    name: string;
    email: string;
  };
  items: {
    productId: number;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: "processing" | "shipped" | "delivered";
}[] = [
  {
    orderId: 1,
    customer: {
      name: "Peterson",
      email: "peterson@gmail.com",
    },
    items: [
      {
        productId: 5,
        price: 1200,
        quantity: 1,
      },
    ],
    totalAmount: 1200,
    status: "processing",
  },
];

/** 
 // Note: 1️⃣4️⃣ API Response Object

Create a type ApiResponse with:
success (boolean)
data (object with id + name)
error (string | null)
*/

/**
 // Note: 1️⃣5️⃣ Dynamic Object Keys

Create an object type ErrorMessages where:
Keys are strings
Values are strings
(Hint: Index signatures)
*/

let n: "hi" = "hi";

// n = "jsmd"
// console.log(n);
