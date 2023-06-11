import Edit from "./useEffect.js";
import { Print, Form } from "./crud.js";
import datas from "../../data.js";
import { useState } from "react";
import "./crud.css";
import CleanUp from "./cleanUp";
import LayoutVsEffect from './layoutVsEffect';

//
//
//
//
//
//

function App6() {
//
  const [cleanUpSignal, setCleanUpSignal] = useState(true);
// 
  const [data, setData] = useState(datas);

  const [editSignal, setEditSignal] = useState(null);

  function getData(movie) {
    setData([...data, movie]);
  }

  function deleteVideo(id) {
    setData(data.filter((dat) => dat.id !== id));
    console.log(data);
  }

  function editVideo(id) {
    setEditSignal(data.find((dat) => dat.id == id));
  }

  function updateVideo(movie) {
    let index = data.findIndex((dat) => dat.id == movie.id);
    let newVideo = [...data];
    newVideo.splice(index, 1, movie);
    setData(newVideo);
  }

  return (
    <>

      {/* <Edit></Edit> <br /> */}

      {/* <button
        onClick={() => {
          setCleanUpSignal(!cleanUpSignal);
        }}
      >
        Toggle Pink and show Clean Up
      </button>

      {cleanUpSignal && <CleanUp></CleanUp>}
      <hr /> */}

      <LayoutVsEffect/>

      <hr />


      {/* <Form
        getData={getData}
        editSignal={editSignal}
        setEditSignal={setEditSignal}
        updateVideo={updateVideo}
      ></Form>

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
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          />
        ))}
      </div> */}

    </>
  );
}

export default App6;
