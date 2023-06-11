function Condition() {
  return (
    <>
      <h1>BLOCKBUSTER💯</h1>
    </>
  );
}

//
//
//
//

let icon2;
let emoji2 = false;

if (emoji2 == true) {
  icon2 = "💯";
} else {
  icon2 = "";
}

function Condition2() {
  return (
    <>
      <h1>BLOCKBUSTER2{icon2}</h1>
    </>
  );
}

//
//
//
//
//

function Condition3() {
  let icon3;
  let emoji3 = true;

  if (emoji3 == true) {
    icon3 = <h1>BLOCKBUSTER3💯</h1>;
  } else {
    icon3 = <h1>BLOCKBUSTER3</h1>;
  }

  return <>{icon3}</>;
}

//
//
//
//
//

function Condition4({ emoji4 }) {
  let icon4;

  if (emoji4 == true) {
    icon4 = "💯";
  } else {
    icon4 = "";
  }

  return (
    <>
      <h1>BLOCKBUSTER4{icon4}</h1>
    </>
  );
}

//
//
//
//
//

function Condition5({ emoji5 }) {
  let icon5 = "💯";

  return <>{emoji5 ? <h1>BLOCKBUSTER5{icon5}</h1> : <h1>BLOCKBUSTER5</h1>}</>;
}


// 
// 
// 
// we can not write if else in return block, because if else statement does not return anything.
// we can write ternary operator, because it return something.
// 
// actually, we can write if else statement with return inside block.
//
//
//
//

function Condition6({ emoji6 }) {
  return <>{<h1>BLOCKBUSTER6 {emoji6 ? "💯" : null}</h1>}</>;
}

//
//
//
//

function Condition7({ emoji7 }) {
  return <>{<h1>BLOCKBUSTER7 {emoji7 && "💯"}</h1>}</>;
}

export {
  Condition,
  Condition2,
  Condition3,
  Condition4,
  Condition5,
  Condition6,
  Condition7,
};
