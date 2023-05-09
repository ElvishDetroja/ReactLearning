import React from "react";
import {Link} from "react-router-dom";

function App2() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/homepage">homepage</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App2;


// Link is similar to anchor tag.