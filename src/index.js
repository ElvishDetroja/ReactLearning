import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main5 from "./root3/2 react and redux/main5";
import Main6 from './root3/3 redux toolkit/main6';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Main5 /> */}
      <Main6 />
    </BrowserRouter>
  </React.StrictMode>
);
