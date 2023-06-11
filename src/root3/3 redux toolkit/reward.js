import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slices/rewardReducer";

function Reward() {

  const elements = useSelector((state) => state.reward.elements);
  const dispatch = useDispatch();

  return (
    <>
      <h4>elements : {elements}</h4>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        Decrement by 5
      </button>
    </>
  );
}

export default Reward;