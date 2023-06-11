import { createContext, useState } from "react";
import ChildB from "./childB";

//
//

const data = createContext("INDIA");
const data2 = createContext();
const data3 = createContext();
const data4 = createContext();
const data5 = createContext({fruit : "apple", vegetable : "carrot"});
const data6 = createContext();


const ThemeContext = createContext("Light");

//
//

// childC is Context API
// childD is useContext Hook.
// childE is useContext with useState Hook.
// childF is useContext with Array and Object.

function ChildA() {
  //
  const name2 = "PAKISTAN";
  const name3 = "BHUTAN";
 const [name4, setName4] = useState("NEPAL");
  const name5 = {
    bike : "hero",
    car : "tata"
  }

  const name6 = ["gujarat", "maharashtra", "rajshthan", "hariyana"];



  return (
    <>
      <data6.Provider value={{name5, name6}}>
      <data5.Provider value={name5}>
      <data4.Provider value={name4}>
        <data3.Provider value={name3}>
          <data2.Provider value={name2}>

              <ChildB />

              <h1>child A : {data._currentValue}</h1>

          </data2.Provider>
        </data3.Provider>
      </data4.Provider>
      </data5.Provider>
      </data6.Provider>
    </>
  );
}

export { ChildA, data, data2, data3, data4, data5, data6, ThemeContext };
