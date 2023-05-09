import React from "react";
import { Routes, Route } from "react-router-dom";
import Testimonial2 from "./Testimonial2";
import TestimonialNew from "./TestimonialNew";


function External() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h2>this is app4 home</h2>} />
        <Route path="/testi" element={<TestimonialNew />} />
        <Route path="/testi2" element={<Testimonial2 />} />
      </Routes>
    </>
  );
}

export default External;