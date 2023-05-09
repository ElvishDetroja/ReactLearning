import React from "react";
import { useLocation } from "react-router-dom";

function Book() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h1>this is Book</h1> {location.state.name}
    </>
  );
}

export default Book;
