import { useRef, useState } from "react";

//
//
//
//
//

function Intermediate() {
  //
  const ipreference = useRef(null);



  function Animation() {
    // 
    "type here".split("").forEach((char, index) => {
      setTimeout(() => {
        ipreference.current.placeholder += char;
      }, 100 * index);
    });
  }


  return (
    <>
      <input type="text" ref={ipreference} onFocus={Animation} />
      <button onClick={Animation}>Animation</button>
    </>
  );
}

// useRef no use DOM manipulation mate thay.
// class and ID ni jem use lai sakay.













function Medium() {

  console.log("medium run");

  const ip = useRef();
  const [details, setDetails] = useState();

  function saveData() {
    setDetails(ip.current);
  }

  return(
    <>
    <input type="text" name="" id="" ref={ip} onChange={(e)=>{
      ip.current = e.target.value;
    }} />

    <button onClick={saveData}>SUBMIT</button>
    {console.log(details)}
    </>
  )
  
}


// jyare form ma onChange par DOM rerender no karavo hoy tyare useRef no use thay.




export {Intermediate, Medium};