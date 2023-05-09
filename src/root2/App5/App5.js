import React from 'react'
import { Link, Routes, Route, NavLink } from "react-router-dom";
import NoComponent from "./NoComponent";
import Home from "./Home";
import Testimonial from "./Testimonial";
import "./App5.css";


function App5() {
  return (
    <>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/testi">testimonial</Link></li>
          <li><Link to="/testi2">testimonial2</Link></li>
          <li><Link to="/testi" replace>testimonial</Link></li>
          <li><Link to="/testi2" reloadDocument>testimonial2</Link></li>
        </ul>
      </nav>
  <hr />

      <NavLink to="/" >home</NavLink> <br />
      <NavLink to="/testimonial" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>testimonial</NavLink>
  <hr />

      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="*" element={<NoComponent />} />
        </Route>
      </Routes>

    
    </>
  )
}

export default App5


// replace run thai jay pachi, jyare back javama avse tyare ek step muki ne back jase.
// jyare link pr click thase tyare reloadDocument thi Document reload thase.

// NavLink automatic .active class ni CSS lai lese.
// jo tene rokvi hoy to end no use kari sakay.

