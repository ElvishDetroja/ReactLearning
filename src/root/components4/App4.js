import {Counter, Counter2, Counter3, Counter4, Counter5} from "./counter";

import {Btn, AddInfo, BtnGroup, MovieAdd, MovieAdd2} from "./btnContent"





function App4() {

  console.log("i am from App4");

  return (
    <>
      <Counter></Counter>
      <Counter2></Counter2>
      <Counter3></Counter3>
      <Counter4></Counter4>
      <Counter5></Counter5>

      <div style = {{marginTop : "50px"}}>
       <Btn>Btn</Btn>
     </div>

     <div style = {{marginTop : "50px"}}>
      <AddInfo/>
     </div>

     <div style = {{marginTop : "50px"}}>
       <BtnGroup></BtnGroup>
     </div>
    

     <div style = {{marginTop : "50px"}}>
       <MovieAdd></MovieAdd>
     </div>

     <div style = {{marginTop : "50px"}}>
       <MovieAdd2></MovieAdd2>
     </div>
     
    </>
  );
}

 




export default App4;
