import { React, useEffect } from "react";

//
//
//
//
//
//
//
//

function CleanUp() {
  function transitionNavBg() {
    if (window.scrollY > 100) {
      console.log("window scroll more than 100");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBg);
    console.log("event applied");
    return () => {
      window.removeEventListener("scroll", transitionNavBg);
      console.log("event removed");
    };
  }, []);

  return (
    <>
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "pink" }}
      ></div>
    </>
  );
}

export default CleanUp;

//
//
//
//
//
//
//
//
//
// cleanup function
//
// cleanup function is a function of the useEffect hook that allows us to stop side effects that no longer need to be executed after our component is unmounted.
// useEffect is built in such a way that we can return a function inside it and this return function is where the cleanup happens.
//
// side Effects
//
// Memory Leak
// Affects the performance of the project by reducing the amount of memory available.
// Slowing down the application.
// System crashes.
