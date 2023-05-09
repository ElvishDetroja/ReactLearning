import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NoComponent from "./NoComponent";
import Home from "./Home";
import Testimonial from "./Testimonial";

function App6() {
  return (
    <>
      <Link to="/">home</Link> <br />
      <Link to="/testimonial">testimonial</Link> <br />
      <Link to="/random">random</Link><hr />

      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="*" element={<NoComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App6;
