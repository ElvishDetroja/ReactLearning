import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Testimonial from "./Testimonial";
import Testimonial2 from "./Testimonial2";
import TestimonialNew from "./TestimonialNew";
import External from "./External";

function App4() {
  return (
    <>

0    
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/testi">testimonial</Link>
          </li>
          <li>
            <Link to="/testi2">testimonial2</Link>
          </li>
        </ul>
      </nav>
      <hr />


1
      <Routes>
        <Route path="/testi" element={<Testimonial />} />
      </Routes>
      <hr />

2
      <Routes>
        <Route path="/" element={<h2>this is app4 home</h2>} />
        <Route path="/testi" element={<TestimonialNew />} />
        <Route path="/testi2" element={<Testimonial2 />} />
      </Routes>
      <hr />

3
      <Routes location="/testimonial">
        <Route path="/" element={<h2>this is app4 home</h2>} />
        <Route path="/praise" element={<TestimonialNew />} />
        <Route path="/praise2" element={<Testimonial2 />} />
      </Routes>
      <hr />

4
      <Routes>
        <Route path="just/*" element={<External />}></Route>
      </Routes>
      <hr />
    </>
  );
}

export default App4;

// multiple routes ma jo path same hase to ae routes na path pan show thai jase.
// jo koi routes ne aa rite show thata stop karvu hoy to location no use Routes ma karvo.
// location thi Routes hard coded thai jay.