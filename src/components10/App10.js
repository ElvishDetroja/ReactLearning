import { Print, Form } from "./crud.js";
import datas from "../data.js";
import { useState, useReducer } from "react";
import {  DataDispatchContext } from "./theme.js";
import "./theme.css";

//
//
//
//
//
//
//

function App10() {
  //
  //
  const [editClip, setEditClip] = useState(null);
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
        setEditClip(null);
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
    setEditClip(data.find((dat) => dat.id == id));
  }

  //
  //
  //
  //
  //

  return (
    <>
      <DataDispatchContext.Provider value={dispatch}>

        <Form editClip={editClip}></Form>

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
              editVideo={editVideo}
            />
          ))}
        </div>

      </DataDispatchContext.Provider>
    </>
  );
}

export default App10;