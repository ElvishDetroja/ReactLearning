import { React, useState } from "react";

function Account() {
  const [account, setAccount] = useState({ amount: 0 });
  const [text, setText] = useState(0);

  function inc() {
    setAccount({ amount: account.amount + 1 });
  }
  
  function dec() {
    setAccount({ amount: account.amount - 1 });
  }

  function incWithValue(num) {
    setAccount({ amount: Number(account.amount) + Number(num) });
  }

  return (
    <>
      <h4>amount : {account.amount}</h4>
      <button
        onClick={() => {
          inc();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Decrement
      </button>
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          incWithValue(text);
        }}
      >
        Increment by {text}
      </button>
    </>
  );
}

export default Account;