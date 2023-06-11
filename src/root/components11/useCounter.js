
import {useState} from "react";





function useCounter(initial) {
    
    const [count, setCount] = useState(initial);

    function Increment() {
        setCount(count + 1);
    }
  
    function Decrement() {
      setCount(count - 1);
    }

    return[count, Increment, Decrement]
    
}






export default useCounter;