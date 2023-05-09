
import useCounter from "./useCounter";





function Section({inital = 0}) {

 const [count, Increment, Decrement] = useCounter(inital);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}

export default Section;
