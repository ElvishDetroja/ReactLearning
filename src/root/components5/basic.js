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

function Basic({ getData }) {
  const [name, setName] = useState();

  function handleSubmit() {
    getData(name);
  }

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick={handleSubmit}>Add Data</button>
    </>
  );
}

//
//
//
//

function Basic2({ getData2 }) {
  const [obj, setObj] = useState();

  function handleSubmit() {
    getData2(obj);
  }

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(event) =>
          setObj({ ...obj, [event.target.name]: event.target.value })
        }
      />
      <input
        type="text"
        name="collection"
        placeholder="collection"
        onChange={(event) =>
          setObj({ ...obj, [event.target.name]: event.target.value })
        }
      />

      <button onClick={handleSubmit}>Add Data</button>
    </>
  );
}

// key nu name same che aetle object ma be j value ave che.
//
//
//
//
//
//

export { Basic, Basic2 };
