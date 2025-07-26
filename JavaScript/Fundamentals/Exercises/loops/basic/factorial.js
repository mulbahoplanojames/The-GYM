/*
14. **Find Factorial of N**
    
    Input: Number `N`
    
    Task: Calculate and print factorial of N.
*/

let fact = 1;

let number = 5;

for (let i = 1; i <= number; i++) {
  fact *= i;
}

console.log(fact);
