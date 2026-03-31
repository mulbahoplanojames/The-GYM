import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setTimeout(() => {
      //   setCount(count + 1)
      // solution
      setCount((prev) => prev + 1);
    }, 1000);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}

/**
 * THe way i understand this is that when i am using the setTimeout function, it creates a closure that captures the value of count at the time of the click.
 * so when i am using the setCount(count+1) inside the setTimeout function, it will always use the value of count at the time of the click.
 * but when using the setCount((prev) => prev + 1) inside the setTimeout function, it will use the latest value of count at the time of the click.
 */
