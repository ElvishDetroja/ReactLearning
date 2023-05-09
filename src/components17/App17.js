import { Print, Form } from "./crud.js";
import datas from "../data.js";
import datas2 from "../data2.js";
import { useState, useReducer, useTransition } from "react";

//
//
//
//
//
//
//

function App17() {
  //
  //
  const [editSignal, setEditSignal] = useState(null);
  const [data, dispatch] = useReducer(dataHandler, datas);
  const [isPending, startTransition] = useTransition();
  //
  //

  function loadMore() {
    startTransition(()=>{
      dispatch({ type: "LOADMORE", payload: datas2 });
    })
  }

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

      case "LOADMORE":
        return action.payload;

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
      <Form editSignal={editSignal} dispatch={dispatch}></Form>

      <button onClick={loadMore}>{isPending ? "LOADING" : "LOAD MORE DATA"}</button>

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

export default App17;








// go to web developer tools and open performance then reduce the net speed and CPU performance.

// useTransition no use loading batavu hoy to thay.