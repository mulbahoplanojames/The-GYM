/*
2. **Compare Two Numbers**
    
    Input: Two numbers
    
    Task: Print which number is bigger or if they are equal.
    
    Example: `5, 8` → `"8 is bigger"`
    
    `3, 3` → `"Numbers are equal"`
*/

const compareNumbers = (num1, num2) => {
  if (num1 > num2) {
    console.log(`${num1} is greater then ${num2}`);
  } else {
    console.log(`${num2} is greater then ${num1}`);
  }
};

compareNumbers(10, -15);
