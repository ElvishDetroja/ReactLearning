import { useState, useEffect } from "react";

//
//
//
//
//
//
//
//

function Edit() {
  //
  console.log("Edit func start");
  //
  //
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const [other, setOther] = useState(0);
  const [other2, setOther2] = useState(0);

  function add() {
    setCount(count + 1);
    console.log("count increase");
  }
  function add2() {
    setCount2(count2 + 1);
    console.log("count2 increase");
  }

  //
  //
  //

  function print() {
    console.log("print from function expression");
    setOther(other + 1);
    setOther2(other2 + 1);
    console.log("other and other2 increase");
  }

  useEffect(print, [count]);

  //
  //
  //

  useEffect(() => {
    console.log("print with no array");
  });

  //
  //

  useEffect(() => {
    console.log("print with empty array");
  }, []);

  //
  //

  useEffect(() => {
    console.log("print with count2 array");
    setOther(other + 1);
    setOther2(other2 + 1);
    console.log("other and other2 increase");
  }, [count2]);

  //
  //
  //

  console.log("Edit func end");

  //
  //
  //
  //
  //
  //

  return (
    <>
      <h1>number is {count}</h1>
      <button onClick={add}>increment</button>
      <h1>number is {count2}</h1>
      <button onClick={add2}>increment</button>
      {console.log(
        `print from return number : ${count} ${count2} ${other} ${other2}`
      )}
    </>
  );
}

export default Edit;

//
//
//
//

// useEffect(<function>, <dependency>)
// useEffect has two input, one is function and another is dependency array.
// dependency array : which state affect the useEffect.
// dependency state or component hoi sake.
//
// compulsory useEffect run one time.
// when there is no array in second input, then useEffect is run with all state changes.
// if we write state name in array, and this state is change, then useEffect is affected.
// if array is empty, then useEffect is run only one time.
//
//
//
//
//
//
//
//
//
//
//
//

// when click on increment, function add is run,function close, setCount increment count.
// count state change, function Edit run, count value change in DOM.
//
// count is deependecy of function print, print run, print function close.
// setOther and setOther2 run, other and other2 state change, function Edit run,
// other and other2 value change in DOM, here two number of state change but DOM render one time.
//
//
//
//
// state variable change thai jay pachi, component pharithi run thay,
// pachi DOM change thay, pachi state variable ne jya dependency api che,
// te useEffect run thay.
//
//
// DOM render thai jay pachi useEffect run thay.