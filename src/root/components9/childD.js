import { data3, data4 } from "./childA";

import { useContext } from "react";

import ChildE from './childE';


function ChildD() {
  const name3 = useContext(data3);
  const name4 = useContext(data4);

  return (
    <>
    <ChildE></ChildE>

      <h1>
       child D : country name is {name3} and {name4}
      </h1>
      
    </>
  );
}

export default ChildD;