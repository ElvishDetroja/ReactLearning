import Basic from "./basic.js";
import { Print, Form } from "./crud.js";
import datas from "../../data.js";
import { useState, useReducer } from "react";

//
//
//
//
//
//
//

function App8() {
  //
  //
  const [editSignal, setEditSignal] = useState(null);
  const [data, dispatch] = useReducer(dataHandler, datas);

  //
  //

  function dataHandler(data, action) {
    //
    switch (action.type) {
      //
      case "GET":
        return [...data, action.payload];

      case "DELETE":
        return data.filter((dat) => dat.id !== action.payload);

      case "UPDATE":
        let index = data.findIndex((dat) => dat.id == action.payload.id);
        let newVideo = [...data];
        newVideo.splice(index, 1, action.payload);
        setEditSignal(null);
        return newVideo;

      default:
        return data;
    }
  }

  //
  //
  //
  //

  function editVideo(id) {
    setEditSignal(data.find((dat) => dat.id == id));
  }

  //
  //
  //
  //
  //

  return (
    <>
      <Basic />

      <Form editSignal={editSignal} dispatch={dispatch}></Form>

      <div className="container">
        {data.map((dat, index) => (
          <Print
            id={dat.id}
            key={index}
            img={`https://picsum.photos/id/${index}/200/300`}
            name={dat.name}
            date={dat["release date"]}
            origin={dat.origin}
            collection={dat.collection}
            dispatch={dispatch}
            editVideo={editVideo}
          />
        ))}
      </div>
    </>
  );
}

export default App8;
