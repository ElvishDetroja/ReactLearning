import { useState } from "react";

//
//

function Problem() {
  //
  //
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(4);
  //
  //
  //
  //
  function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  //
  //
  //
  //
  //
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setValue(value - 1);
  }
  //
  //
  //
  //
  //
  console.log("startFib");
  const res = fibonacci(value);

  //
  //
  //
  return (
    <>
      <h3>fibonacci value is {res}</h3>

      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>start fibonacci from {value}</button>
    </>
  );
}

export default Problem;