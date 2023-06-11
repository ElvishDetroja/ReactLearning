import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementAccount,
  decrementAccount,
  incrementAccountByNumber,
} from "./actions";

function Account() {
  const [value, setValue] = useState(0);

  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();

  return (
    <>
      <h4>amount : {amount}</h4>
      <button
        onClick={() => {
          dispatch(incrementAccount());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrementAccount());
        }}
      >
        Decrement
      </button>
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementAccountByNumber(value));
        }}
      >
        Increment by {value}
      </button>
    </>
  );
}

export default Account;
