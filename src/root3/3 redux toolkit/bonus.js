import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./slices/bonusSlice";

function Bonus() {
  //
  const [value, setValue] = useState(0);

  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <>
      <h4>points : {points}</h4>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
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
          dispatch(incrementByAmount(value));
        }}
      >
        Increment by {value}
      </button>
    </>
  );
}

export default Bonus;