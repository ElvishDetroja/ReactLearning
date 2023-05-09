import { React, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function App7() {

  const [number, setNumber] = useState(88);
  const [searchParams, setSearchParams] = useSearchParams({ n: 99 });

  const number2 = searchParams.get("n");

  return (
    <>
      <br />
      <Link to="/books/1">Book1</Link> <br />
      <Link to="/books/2">Book2</Link> <br />
      <Link to={`/books/${number}`}>Book {number}</Link> <br />
      <Link to={`/books/${number2}`}>Book {number2}</Link> <br /><hr /><br />


      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      /> <br />

      <input
        type="text"
        value={number2}
        onChange={(e) => {
            setSearchParams({n : e.target.value});
        }}
      />
    </>
  );
}

export default App7;



// page refresh thai jay to pan data url ma hase.
// direct type karine url ma search karavi sakay.