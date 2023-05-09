
import { useContext, useState } from "react";

import {ThemeContext} from "./childA";

import ChildF from "./childF.js";


function ChildE() {
    
    const ThemeContext1 = useContext(ThemeContext);

    const [mode, setMode] = useState(ThemeContext1);
  
    return (
      <>

      <ChildF></ChildF>

        <h1>child E : {ThemeContext1} : only Context</h1>
        <h1>child E : {mode} : Context with State</h1>
        <button onClick={()=>{setMode(mode == "Dark" ? "Light" : "Dark")}}>Change Mode</button>
      </>
    );
  }
  
  export default ChildE;