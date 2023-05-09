
import { useContext } from "react";

import {data5, data6} from "./childA";


function ChildF() {
    

    const d5 = useContext(data5);
    const d6 = useContext(data6);

  
    return (
      <>
        <h1>child F : {d5.bike}</h1>
        <h1>child F : {d5.fruit}</h1>

        <h1>child F : {d6.name5.car}</h1>
        <h1>child F : {d6.name6[2]}</h1>
      </>
    );
  }
  
  export default ChildF;