import MemoChild from "./memoChild.js";
import MemoChild1 from "./memoChild1.js";
import MemoChild2 from "./memoChild2.js";
import MemoChild3 from "./memoChild3.js";
import MemoChild4Out from "./memoChild4.js";
import { useState, useCallback } from "react";

//
//
//
const check4 = () => {};


function MemoProblem() {
  // 
  const [count, setCount] = useState(0);

  const check2 = () => {};
  const check3 = useCallback(() => {}, []);

// 
// 

  function increment() {
    setCount(count + 1);
  }

// 
// 

  return (
    <>
      <MemoChild></MemoChild>
      <MemoChild1 count={count}></MemoChild1>
      <MemoChild2 check2={check2}></MemoChild2>
      <MemoChild3 check3={check3}></MemoChild3>
      <MemoChild4Out check4={check4}></MemoChild4Out>

      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default MemoProblem;




// jyare count change thay tyare MemoChild rerender thase. bhale tema props no hoy.
// pan jo MemoChild na export ma apne memo lakhiye to have MemoChild update thase nai.

// MemoChild1 na export ma bhale memo lakhiyu pan count state variable change thase to,
// MemoChild1 rerender thase, because state count variable tena props ma che.

// MemoChild2 na export ma bhale memo lakhiyu pan count state variable change thase to,
// DOM rerender thase and function check2 pan rerender thase, check2 MemoChild2 na props ma che,
// tethi MemoChild2 rerender thase.

// function check3 ma useCallback or useMemo no use kari sakiye,
// have jyare DOM rerender thase tyare check3 phariti run nahi thay,
// tethi MemoChild3 pan pharithi rerender nai thay.
// ahi pan export ma memo lakhvani jarur to che j.

// function check4 ne to MemoProblem function ni j bahar lakhi nakhyu,
// tethi DOM rerender thase to pharithi check4 run thay teno question j nai.
// tethi MemoChild4 pharithi rerender thase j nai.
// to pan export ma memo to lakhvu j padse.

// jo export ma memo no lakhvu hoy to MemoChild4Out ma jem function expression banavyu,
// te rite function ne memoized kari sakay.