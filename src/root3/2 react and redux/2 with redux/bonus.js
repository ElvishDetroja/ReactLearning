import { React, useState } from "react";
import {
  incrementBonus,
  decrementBonus,
  incrementBonusByNumber,
} from "./actions";

function Bonus({ store }) {
  const [value, setValue] = useState(0);


  return (
    <>
      <h4>points : {store.getState().bonus.points}</h4>
      <button
        onClick={() => {
          store.dispatch(incrementBonus());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          store.dispatch(decrementBonus());
        }}
      >
        Decrement
      </button>
      <input
        type="value"
        name=""
        id=""
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          store.dispatch(incrementBonusByNumber(value));
        }}
      >
        Increment by {value}
      </button>
    </>
  );
}

export default Bonus;
