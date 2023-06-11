import { data, data2 } from "./childA";

import ChildD from "./childD.js";


function ChildC() {


  return (
    <>


<ChildD/>


      <data.Consumer>
        {
        (name) => {
          return (<h1>child C : {name}</h1>)
                  }
        }
      </data.Consumer>




      <data.Consumer>
        {
        (name) => {
          return (
            <data2.Consumer>
                {
                    (name2)=>{
                        return(<h1>child C : {name} & {name2}</h1>)
                    }
                }
            </data2.Consumer>
          )
                  }
        }
      </data.Consumer>




    </>
         )
        
}

// 
// 

export default ChildC;
