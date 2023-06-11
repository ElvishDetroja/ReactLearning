let topic = "Be Unique";
let cs = "normal";

function Write() {
  return (
    <>
      <h1 className={cs}>{topic}</h1>
    </>
  );
}

//
//
//
export { Write };

// when we require JS in JSX, then we use {}.
// <> </> is called as fragment.