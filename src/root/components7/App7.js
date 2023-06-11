import { useState } from "react";
import ChildA from "./childA";

function App7() {
  let name = "MahaBharat";

  const [katha, setKatha] = useState("Ramayana");

  return (
    <>
      <ChildA name={name} katha={katha}></ChildA>
    </>
  );
}

export default App7;