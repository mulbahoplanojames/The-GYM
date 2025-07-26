/*
15. **Print Odd Numbers in Reverse up to N**
    
    Input: Number `N`
    
    Task: Print odd numbers from N down to 1 in descending order.
*/

function evenOddInReverse(n) {
  for (let i = n - 1; i < n; i--) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

evenOddInReverse(10);
