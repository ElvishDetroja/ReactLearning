import { React, useState } from "react";
import {
  incrementAccount,
  decrementAccount,
  incrementAccountByNumber,
} from "./actions";

function Account({ store }) {
  const [value, setValue] = useState(0);

  return (
    <>
      <h4>amount : {store.getState().account.amount}</h4>
      <button
        onClick={() => {
          store.dispatch(incrementAccount());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          store.dispatch(decrementAccount());
        }}
      >
        Decrement
      </button>
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          store.dispatch(incrementAccountByNumber(value));
        }}
      >
        Increment by {value}
      </button>
    </>
  );
}

export default Account;