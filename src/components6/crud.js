import { useState, useEffect } from "react";

function Print({
  img,
  name,
  date,
  origin,
  collection,
  id,
  deleteVideo,
  editVideo,
}) {
  return (
    <>
      <div className="container-box">
        <img className="imgCSS" src={img} alt="" />
        <h2>Movie : {name}</h2>
        <h3>Release Date : {date}</h3>
        <h4>Origin : {origin}</h4>
        <h5>Collection : {collection}</h5>
        <button className="close" onClick={() => deleteVideo(id)}>
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          EDIT
        </button>
      </div>
    </>
  );
}

//
//
//
//
//
//

function Form({ getData, editSignal, setEditSignal, updateVideo }) {

  let defaultObj = {
    id: 4,
    name: "",
    "release date": 2022,
    origin: "IND",
    collection: "",
  };

  const [movie, setMovie] = useState(defaultObj);

  function handleSubmit() {
    if (editSignal) {

      updateVideo(movie);
      setMovie(defaultObj);
      setEditSignal(!editSignal);

    } else {
      getData(movie);
      setMovie(defaultObj);
    }
  }

  function editVideoClip() {
    if (editSignal) {
      setMovie(editSignal);
    }
  }

  useEffect(editVideoClip, [editSignal]);

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={movie.name}
        onChange={(event) =>
          setMovie({ ...movie, [event.target.name]: event.target.value })
        }
      />

      <input
        type="text"
        name="collection"
        placeholder="collection"
        value={movie.collection}
        onChange={(event) =>
          setMovie({ ...movie, [event.target.name]: event.target.value })
        }
      />

      <button onClick={handleSubmit}>{editSignal ? "Edit" : "Add"} Data</button>
    </>
  );
}

//
//
//
//

export { Print, Form };