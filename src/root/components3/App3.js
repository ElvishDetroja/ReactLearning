import data from "../../data.js"

import { Btn, Btn2, Btn3, Btn4, Btn5, Btn6, Btn7, Btn8, Btn9, Btn10, Btn11 } from "./event";

import { Bubble, Bubble2} from "./eventbubbling";



function App3() {
  return (
    <>
      <Btn></Btn>
      <Btn2></Btn2>
      <Btn3></Btn3>
      <Btn4></Btn4>
      <Btn5 name="Btn5" msg="Play 5"></Btn5>
      <Btn5 name="Btn55" msg="Pause 55"></Btn5>
      <Btn6 msg="Play 6">Btn 6</Btn6>
      <Btn6 msg="Pause 66">Btn 66</Btn6>
      <Btn7 onSmash={()=>{console.log("Play 7")}}>Btn 7</Btn7>
      <Btn7 onSmash={()=>{console.log("Pause 77")}}>Btn 77</Btn7>
      <Btn8 onPlay={()=>{console.log("Playing")}} onPause={()=>{console.log("Pausing")}}>Btn 8</Btn8>
      <Btn9 onPlay={()=>{console.log("Playing")}} onPause={()=>{console.log("Pausing")}}>Btn 9</Btn9>
      <Btn10 onPlay={()=>{console.log("Playing")}} onPause={()=>{console.log("Pausing")}}>Btn 10</Btn10>

  <div>
    {
    data.map((dat,index)=>{
      return <Btn11 onPlay={()=>{console.log("Playing", dat.name)}} onPause={()=>{console.log("Pausing", dat.name)}} key={index}>{dat.name}</Btn11>
    })
    }
  </div>

    <Bubble></Bubble>
    <Bubble2></Bubble2>

    </>
  );
}

export default App3;
