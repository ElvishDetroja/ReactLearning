import React from "react";
import ReactDOM from "react-dom/client";
import App from "./root2/App/App.js";
import App2 from "./root2/App2/App2.js";
import App3 from "./root2/App3/App3.js";
import App4 from "./root2/App4/App4.js";
import App5 from "./root2/App5/App5.js";
import App6 from "./root2/App6/App6.js";
import App7 from "./root2/App7/App7.js";
import App8 from "./root2/App8/App8.js";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>

      {/* <App />
      <App2 /> */}

      {/* <App3 /> */}

      {/* <App4 /> */}

      {/* <App5 /> */}

      {/* <App6 /> */}

      {/* <App7 /> */}

      {/* <App8 /> */}

    </BrowserRouter>
  </React.StrictMode>
);

// App  : Defining Routes (Routes and Route)
// App2 : Handling Navigation (Link)
// App3 : Dynamic Routing, Route Specificity and Nested Route (useParams and Outlet)
// App4 : Multiple Routes and Routes in different component
// App5 : Link Navigation (replace and reloadDocument) and NavLink
// App6 : Manual Navigation (Navigate and useNavigate)
// App7 : Search Parameters
// App8 : State/Location Data