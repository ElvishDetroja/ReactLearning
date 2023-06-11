import { useState } from "react";

//
//
//
//
//
//

function Counter() {
  let number = 1;

  function handleClick() {
    number++;
    console.log(number);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

// local variable can not change UI content.
//
//
// 
// state is built in react object that is used to contain data or information about the component.
// state can be modified based on user action or network changes.
// everytime when the state of an object changes, React re-render the component to the browser.
//
//
//
// 
// 
// 
// 
// 
//

function Counter2() {
  console.log("Counter2 run");

  const [number, setNumber] = useState(2);

  console.log("outside", number);

  function handleClick() {
    console.log("inside handleClick", number);
    setNumber(number + 1);
    console.log("inside handleClick", number);
  }

  return (
    <>
      <h1>{number}</h1>
      {console.log("in return", number)}
      <button onClick={handleClick}>Add</button>
    </>
  );
}

// jyare button pr click tahse tyare handleClick call thase.
// console ma number 2 print thay che.
// setNumber asynchronous che. tethi te que ma jase.
// console ma number 2 print thay che.
// jyare handleClick function complete thai jase pachi, setNumber(2+1) = setNumber(3) thay che.
// setNumber change thayu and number = 3 thai gayu. tethi state ni position change thai.
// tethi Counter2 render thase. and return karse tyare number ni value DOM ma change thai jase.
//
//
//
//
//
//
//
//
//
function Counter3() {
  console.log("Counter3 run");

  const [number, setNumber] = useState(3);

  console.log("outside", number);

  function handleClick() {
    console.log("inside handleClick", number);
    setNumber(number + 2);
    setNumber(number + 8);
    setNumber(number + 5);
    console.log("inside handleClick", number);
  }

  return (
    <>
      <h1>{number}</h1>
      {console.log("in return", number)}
      <button onClick={handleClick}>Add</button>
    </>
  );
}

// je last setNumber hase, te j final ganase.
//
// pan ahi number + 2 = 5 pan thay che.
// pan ahi number + 8 = 11 pan thay che.
// pan ahi number + 5 = 8 pan thay che.
//
// execute badha thay che, pan answer last j avse. because number to same j che.
// 
// jyare handleClick function complete execute thai jay + setNumber je Asynchronous che, te completely execute thai jay,
// pachi j number state render thase.
//
//
//
//
//
//

function Counter4() {
  console.log("Counter4 run");

  const [number, setNumber] = useState(4);

  console.log("outside", number);

  function handleClick() {
    console.log("inside handleClick", number);

    setTimeout(() => {
      setNumber(number + 1);
      console.log("number is set")
    }, 2000);
    console.log("inside handleClick", number);
  }

  return (
    <>
      <h1>{number}</h1>
      {console.log("in return", number)}
      <button onClick={handleClick}>Add</button>
    </>
  );
}

// user 2sec ni andar multiple time button press kare to pan 2sec mate aek j vakahat increment thase.
//
//
//
//
//
//
//
//
//
//
function Counter5() {
  console.log("Counter5 run");

  const [number, setNumber] = useState(5);

  console.log("outside", number);

  function handleClick() {
    console.log("inside handleClick", number);

    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);

    console.log("inside handleClick", number);
  }

  return (
    <>
      <h1>{number}</h1>
      {console.log("in return", number)}
      <button onClick={handleClick}>Add</button>
    </>
  );
}


// this method is called as updater function style.
// 
// jyare handleClick function execute thai jase, pachi setNumber thavanu saru thase.
// because setNumber Asynchronous che, all three setNumber que ma hase.
// ahi number = number + 1 thay che, tethi number 5 + 1 = number 6 thai jase.
// number 6 + 1 = 7         and         number 7 + 1 = 8
// 
// jyare all three setNumber complete thai jase, pachi j DOM render thase.
// tethi ek j time number ni value DOM ma change thase.
//
//
//
//
//
//
//

export { Counter, Counter2, Counter3, Counter4, Counter5 };