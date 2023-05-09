import { useState, useMemo } from "react";

//
//

function Memo() {
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

  const res = useMemo(() => {

    console.log("startFib");
    return fibonacci(value);

  }, [value]);

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

export default Memo;







// memoization as caching a value so that it does not need to be recalculated.
// The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

// The useCallback Hook and useMemo Hook are run, when one of its dependencies update.





// useEffect run after DOM render.
// useMemo and useCallback run before DOM render.