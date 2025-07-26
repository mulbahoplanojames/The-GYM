/*

5. **Check Positive, Negative or Zero**
    
    Input: A number
    
    Task: Print whether the number is `"Positive"`, `"Negative"`, or `"Zero"`.
*/

function negativePositive(num) {
  if (num < 0) {
    console.log("Negative");
  } else if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Number is Zero");
  }
}

negativePositive(0);
