import React from "react";
import { useEffect, useState, useLayoutEffect, useRef } from "react";

function LayoutVsEffect() {
  //
  console.log("component run");

  const [number, setNumber] = useState(0);
  const blueContainer = useRef();

  useEffect(() => {
    console.log("i am from first useEffect");
  }, [number]);
  
  useEffect(() => {
    console.log("i am from second useEffect");
  }, [number]);
  
  useLayoutEffect(() => {
    console.log("i am from first useLayoutEffect");
    blueContainer.current.style.backgroundColor = "red";
    setNumber(5)
  }, [number]);

  useLayoutEffect(() => {
    console.log("i am from second useLayoutEffect");
  }, [number]);

  return (
    <>
      
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        increment number
      </button>
      <h1>number : {number} {console.log("DOM render")} </h1>

      <div
        className="blue-container"
        style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
        ref={blueContainer}
      ></div>
    </>
  );
}

export default LayoutVsEffect;











// The useEffect hook works asynchronously
// The useLayoutEffect hook works synchronously. It runs immediately after React has performed all DOM mutations. It will run after every render but before the screen is updated.