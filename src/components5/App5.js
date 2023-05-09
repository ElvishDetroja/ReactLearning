import {Basic, Basic2} from "./basic";

import {Form, Print} from "./form";

import data from "../data.js";

import {useState} from "react";

//
//
//
//
//

function App5() {

  const [dataAll, setDataAll] = useState(data);

  function getData(name) {
    console.log("enter name is", name);
  }

  function getData2(obj) {
    console.log(obj);
  }

  // 
  // 

  function getData3(movie) {
    setDataAll([...dataAll, movie])
  }


  return (
    <>
      <Basic getData={getData}></Basic>
      <Basic2 getData2={getData2}></Basic2>

      <Form getData3={getData3}></Form>

      <div className="container">
        {dataAll.map((dat, index) => (
          <Print
            key={index}
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

export default App5;