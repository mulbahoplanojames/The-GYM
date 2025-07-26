/*
4. **Sum Numbers from 1 to N**
    
    Input: Number `N`
    
    Task: Calculate and print the sum from 1 to N.
    
    Example: `5` → `15`
 */

const sumNumbersFromOneTillInfinity = (n) => {
  let i = 1;
  let sum = 0;

  while (i <= n) {
    sum += i;
    i++;
  }

  console.log(
    "🚀 ~ sum-numbers-1-n.js ~ sumNumbersFromOneTillInfinity ~ i:",
    sum
  );
};

sumNumbersFromOneTillInfinity(15);
