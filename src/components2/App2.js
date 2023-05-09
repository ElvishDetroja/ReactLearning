import {
  Condition,
  Condition2,
  Condition3,
  Condition4,
  Condition5,
  Condition6,
  Condition7,
} from "./conditional.js";

import Print from "./map.js";

import "./component2.css";

import data from "../data.js";




function App2() {

  return (
    <>

      <Condition />
      <Condition2 />
      <Condition3 />
      <Condition4 emoji4={true} />
      <Condition4 emoji4={false} />
      <Condition5 emoji5={true} />
      <Condition5 emoji5={false} />
      <Condition6 emoji6={true} />
      <Condition6 emoji6={false} />
      <Condition7 emoji7={true} />
      <Condition7 emoji7={false} />

      <div className="container">
        {data.map((dat, index) => (
          <Print
            key={index}
            id={index}
            img={`https://picsum.photos/id/${index}/200/300`}
            name={dat.name}
            date={dat["release date"]}
            origin={dat.origin}
            collection={dat.collection}
          />
        ))}
      </div>
      
    </>
  );
}

export default App2;