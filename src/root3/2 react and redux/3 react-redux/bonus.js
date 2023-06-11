import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  incrementBonus,
  decrementBonus,
  incrementBonusByNumber,
} from "./actions";

function Bonus() {
  const [value, setValue] = useState(0);

  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <>
      <h4>points : {points}</h4>
      <button
        onClick={() => {
          dispatch(incrementBonus());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrementBonus());
        }}
      >
        Decrement
      </button>
      <input
        type="value"
        name=""
        id=""
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementBonusByNumber(value));
        }}
      >
        Increment by {value}
      </button>
    </>
  );
}

export default Bonus;
