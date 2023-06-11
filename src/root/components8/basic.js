import { useReducer } from "react";

function Basic() {
  //
  let obj1 = [{
    name: "Hari",
    gender: "male",
  }];

  let obj2 = {
    name: "Leela",
    gender: "female",
  };

  const [result, dispatch] = useReducer(handler, obj1);

  function handler(result, action) {
    //
    switch (action.type) {
      case "ADD":
        return [...result, action.payload];
      case "REDUCE":
        return { ...result, ...action.payload };
      default:
        return null;
    }
  }

  // useReducer is used when one direction data transfer is required. like parent to child.
  // handler function has two input required, first is variable, which we used as state and second is action object.
  // handler jyare return karse te result variable ma change lavse.
  // ahi result variable ae state tarike j act kare che.

  //
  //
  //
  //
  //
  //

  function handleChange() {
    dispatch({ type: "ADD", payload: obj2 }); // { type: "ADD", payload: obj2 }          this is action object.
  }

  function handleChange2() {
    dispatch({ type: "REDUCE", payload: obj2 });
  }

  return (
    <>
      <button onClick={handleChange}>Change {result.name}</button>
      <button onClick={handleChange2}>Change2 {result.name}</button>
      {console.log(result)}
    </>
  );
}

export default Basic;
