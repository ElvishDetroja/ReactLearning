import { useState } from "react";

import data from "../data.js";
//
//
//
//
//
//

function Btn({ children }) {

  const [runningStatus, setrunningStatus] = useState(false);

  function BtnFunc() {
    setrunningStatus(!runningStatus);
  }
  
  return (
    <>
      <button onClick={BtnFunc}>
        {children} {runningStatus ? "||" : ">"}
      </button>
    </>
  );
}

//
//
//
//
//

function AddInfo() {
  // 
  // 
  let obj = { name: "Hari", age: 28 };

  let array = [{ name: "Harry", age: 17 }];

  const [info, setInfo] = useState(obj);
  const [info2, setInfo2] = useState(array);

  function setData() {
    // 
    // setInfo({ name: "Prasad" });
    // setInfo({ info, name: "Prasad" });
    // setInfo({ ...info, name: "Prasad" });
    setInfo({ ...info, gender: "male" });

    // setInfo2({name : "Potter", age : 60})
    // setInfo2([info2, {name : "Potter", age : 60}])
    setInfo2([...info2, {name : "Potter", age : 60}])

    console.log(info);
    console.log(info2);
  }

  return (
    <>
      <button onClick={setData}>AddInfo</button>
    </>
  );
}

//
//
//
//
//
//

function BtnGroup() {
  return (
    <>
      {data.map((dat, index) => {
        return <Btn key={index}>Btn {dat.name}</Btn>;
      })}
    </>
  );
}

//
//
//
//
//
//

function MovieAdd() {
  const [Movie, setMovie] = useState(data);

  let duplicateMovie = [...Movie];

  duplicateMovie.push({
    id: Movie.length,
    name: "KGF",
    "release date": 2021,
    origin: "IND",
    collection: "0.9B$",
  });

  return (
    <>
      {duplicateMovie.map((dat, index) => {
        return <Btn key={index}>Btn {dat.name}</Btn>;
      })}
    </>
  );
}

// state variable ne direct mutet no kari sakiye.
//
//
//
//
//
function MovieAdd2() {
  console.log("i am from MovieAdd2");
  const [Movie, setMovie] = useState(data);

  function AddContent() {
    setMovie([
      ...Movie,
      {
        id: Movie.length,
        name: "Pushpa",
        "release date": 2021,
        origin: "IND",
        collection: "0.9B$",
      },
    ]);
  }

  return (
    <>
      <div>
        <button onClick={AddContent}>Add Movie</button>
      </div>
      {Movie.map((dat, index) => {
        return <Btn key={index}>Btn {dat.name}</Btn>;
      })}
      {console.log(Movie)}
    </>
  );
}

// jo function ni andar setMovie nai hoy to, te function no direct child hase,
// jo state change thase to te asynchronous work karse tethi jyare ek vakhat function run thai jase,
// pachi state change thase, and state change thayu tethi pharithi function run thase,
// pharithi state change thase and infinite loop continue thase.
//
//
//
//

export { Btn, AddInfo, BtnGroup, MovieAdd, MovieAdd2 };