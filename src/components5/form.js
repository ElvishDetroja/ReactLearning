import "./form.css";

import { useState } from "react";

//
//
//
//
//
//
//
//

function Form({ getData3 }) {

  console.log("form run")

  let defaultObj = {
    id: 4,
    img: "https://picsum.photos/id/4/200/300",
    name: "",
    "release date": 2022,
    origin: "IND",
    collection: "",
  };

  const [movie, setMovie] = useState(defaultObj);

  function handleSubmit() {
    console.log(movie);
    getData3(movie);
    setMovie(defaultObj);
  }

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

      <button onClick={handleSubmit}>Add Data</button>
    </>
  );
}

//
//
//
//

function Print({ img, name, date, origin, collection }) {
  return (
    <>
      <div className="container-box">
        <img className="imgCSS" src={img} alt="" />
        <h2>Movie : {name}</h2>
        <h3>Release Date : {date}</h3>
        <h4>Origin : {origin}</h4>
        <h5>Collection : {collection}</h5>
      </div>
    </>
  );
}

//
//
//
//

export { Form, Print };