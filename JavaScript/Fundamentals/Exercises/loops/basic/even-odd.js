/*
1. **Check Even or Odd**
    
    Input: A number
    
    Task: Print `"Even"` if the number is even, otherwise `"Odd"`.
    
    Example: `4` → `"Even"`
    
    `7` → `"Odd"`
*/

const evenOdd = (number) => {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

evenOdd(4);
evenOdd(3);
