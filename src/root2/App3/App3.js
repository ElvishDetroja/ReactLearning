import React from "react";
import { Routes, Route } from "react-router-dom";
import Testimonial from "./Testimonial";
import Testimonial2 from "./Testimonial2";
import Testimonial3 from "./Testimonial3";
import TestimonialNew from "./TestimonialNew";
import Testimonial3New from "./Testimonial3New";
import NoComponent from './NoComponent';

function App3() {
  return (
    <>
      <Routes>

        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/testimonial/:id" element={<Testimonial />} />
        <Route path="/testimonial/new" element={<TestimonialNew />} />





        <Route path="/praise">
          <Route index element={<Testimonial />} />
          <Route path=":id" element={<Testimonial />} />
          <Route path="new" element={<TestimonialNew />} />
        </Route>

        {/* http://localhost:3000/praise : open <Testimonial /> */}
        {/* http://localhost:3000/praise/new : open <TestimonialNew /> */}





        <Route path="/praise2" element={<Testimonial />}>
          <Route path=":id" element={<Testimonial />} />
          <Route path="new" element={<TestimonialNew />} />
        </Route>

        {/* http://localhost:3000/praise2/new : open Nothing */}





        <Route path="/testi" element={<Testimonial2 />}>
          <Route path=":id" element={<Testimonial2 />} />
          <Route path="new" element={<TestimonialNew />} />
        </Route>

        {/* Testimonial2 ma outlet no use karel che */}
        {/* http://localhost:3000/testi : open <Testimonial2 /> */}
        {/* http://localhost:3000/testi/new : open <Testimonial2 /> and <TestimonialNew /> */}




      

        <Route path="/testi2">
          <Route index element={<Testimonial2 />}></Route>
          <Route path=":id" element={<Testimonial2 />} />
          <Route path="new" element={<TestimonialNew />} />
        </Route>

        {/* Testimonial2 ma outlet no use karel che chata pan output ma ek j page avse */}
        {/* http://localhost:3000/testi2 : open <Testimonial2 /> */}
        {/* http://localhost:3000/testi2/new : open <TestimonialNew2 /> */}





        <Route path="/says" element={<Testimonial3 />}>
          <Route path=":id" element={<Testimonial3 />} />
          <Route path="new" element={<Testimonial3New />} />
        </Route>

        <Route path="/*" element={<NoComponent />} />
        
      </Routes>
    </>
  );
}

export default App3;





// useParams no use tyare karvo jyare data ne url ma show karvo hoy.
// Outlet no use tyare karvo jyare IOS na file manager ni jem div show karva hoy.
// Outlet thi tena child ma Context dwara data send kari sakay.
