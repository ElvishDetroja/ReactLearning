function Bubble() {
  function justPrint() {
    console.log("button clicked");
  }
  return (
    <>
      <div
        style={{ marginTop: "100px" }}
        onClick={() => {
          console.log("parent clicked");
        }}
      >
        <button onClick={justPrint}>BB</button>
      </div>
    </>
  );
}

//
//
//
//
//
//
//

function Bubble2() {
  function justPrint2(event) {
    event.stopPropagation();
    // event.preventDefault();           // this is used in form.
    console.log("button2 clicked");
  }
  return (
    <>
      <div
        onClick={() => {
          console.log("parent clicked");
        }}
      >
        <button onClick={justPrint2}>BB2</button>
      </div>
    </>
  );
}

export { Bubble, Bubble2 };