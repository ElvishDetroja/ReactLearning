import {useRef, useState, useEffect} from "react";

function Normal() {

    let tag = 0;
    const [value, setValue] = useState(0);
    let price = useRef(0);

    function Increment() {
        tag++;
        setValue(value + 1);
        price.current++;
        console.log("tag is", tag)
        console.log("value is", value);
        console.log("price is", price, price.current)
    }
    

    return(
        <>
        <h1>tag {tag}, value {value}, price {price.current}</h1>
        <button onClick={Increment}>Increment</button>
        </>
    )
}


// simple variable and useRef sathe useState no use karvama ave to,
// useState change thay, DOM change thase, function recall thase and variable ni value pharithi reset thase.
// jyare ref ni value pharithi reset thase nai.

// simple variable and ref ni value change thi DOM manipulation thase nai. aetle ke function recall thase nai.






function Simple() {
  // 
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
    console.log(`simple function ${inputValue}`);
  
    useEffect(() => {
      previousInputValue.current = inputValue;
      console.log(`useEffect ${inputValue}`);
    }, [inputValue]);
  
    return (
      <>

        <h3>Current Value: {inputValue}</h3>
        {console.log(`return ${inputValue}`)}
        <h3>Previous Value: {previousInputValue.current}</h3>
        
        <input
          type="text"
          value={inputValue}
          placeholder="type something"
          onChange={(e) => setInputValue(e.target.value)}
        />
 
      </>
    );
  }



export {Normal, Simple};