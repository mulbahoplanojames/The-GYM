/*
8. **FizzBuzz (Basic)**
    
Task: For numbers 1 to 15, print `"Fizz"` if divisible by 3, `"Buzz"` if divisible by 5, else print the number.
*/

const fizzBuzz = (num) => {
  if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log("FizzBuzz");
  }
};

fizzBuzz(15);
