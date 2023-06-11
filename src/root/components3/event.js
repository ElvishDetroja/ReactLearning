function Btn() {
  return (
    <>
      <button onClick={console.log("Btn1")}>Btn1</button>
    </>
  );
}

// javascript expression always call.
// if we will not click on btn, then still output is coming.
//
//
//
//
//

function Btn2() {
  return (
    <>
      <button onClick={() => console.log("Btn2")}>Btn2</button>
    </>
  );
}

// now, function is called when, button is click.
//
//
//
//
//

function Btn3Func() {
  console.log("Btn3");
}

function Btn3() {
  return (
    <>
      <button onClick={Btn3Func()}>Btn3</button>
    </>
  );
}

// if we will not click on btn, then still output is coming.so, we will write only function name.
//
//
//
//
//
//

function Btn4Func() {
  console.log("Btn4");
}

function Btn4() {
  return (
    <>
      <button onClick={Btn4Func}>Btn4</button>
    </>
  );
}

//
//
//
//
//
//

function Btn5({ name, msg }) {
  function Btn5Func() {
    console.log(msg);
  }
  return (
    <>
      <button onClick={Btn5Func}>{name}</button>
    </>
  );
}

//
//
//
//
//

function Btn6({ children, msg }) {
  function Btn6Func() {
    console.log(msg);
  }
  return (
    <>
      <button onClick={Btn6Func}>{children}</button>
    </>
  );
}
//
//
//
//
//

function Btn7({ children, onSmash }) {
  function Btn7Func() {
    onSmash();
  }
  return (
    <>
      <button onClick={Btn7Func}>{children}</button>
    </>
  );
}

// here, onSmash is called as custom event.
//
//
//
//

function Btn8({ children, onPlay, onPause }) {
  let runningStatus = false;

  function Btn8Func() {
    if (runningStatus) onPause();
    else onPlay();
    runningStatus = !runningStatus;
  }

  return (
    <>
      <button onClick={Btn8Func}>{children}</button>
    </>
  );
}

//
//
//
//
//

function Btn9({ children, onPlay, onPause }) {
  let runningStatus = false;
  function Btn9Func() {
    if (runningStatus) {
      onPause();
      children = "Btn 9 ||";
      console.log(children);
    } else {
      onPlay();
      children = "Btn 9 >";
      console.log(children);
    }
    runningStatus = !runningStatus;
  }
  return (
    <>
      <button onClick={Btn9Func}>{children}</button>
    </>
  );
}

// children ni value change thay che pan DOM ni andar change nai thay.
// it means props are read only.
// don't use this approach.
//
//
//
//
//

function Btn10({ children, onPlay, onPause }) {
  let runningStatus = false;

  function Btn10Func() {
    if (runningStatus) {
      onPause();
    } else {
      onPlay();
    }
    runningStatus = !runningStatus;
  }

  return (
    <>
      <button onClick={Btn10Func}>
        {children} {runningStatus ? ">" : "||"}
      </button>
    </>
  );
}

// variable change thase to pan DOM rerender nai thay.
//
//
//
//
//
// using map in Btn11

function Btn11({ children, onPlay, onPause }) {
  let runningStatus = false;
  function Btn11Func() {
    if (runningStatus) {
      onPause();
    } else {
      onPlay();
    }
    runningStatus = !runningStatus;
  }
  return (
    <>
      <button onClick={Btn11Func}>{children}</button>
    </>
  );
}

// badha movie mate variable runningStatus seperately manage thay che.
//
//
//
//

export { Btn, Btn2, Btn3, Btn4, Btn5, Btn6, Btn7, Btn8, Btn9, Btn10, Btn11 };
