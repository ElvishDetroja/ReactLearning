import { React, useState } from "react";

function Bonus() {
  const [bonus, setbonus] = useState({ points: 0 });
  const [text, setText] = useState(0);

  function inc() {
    setbonus({ points: bonus.points + 1 });
  }
  function dec() {
    setbonus({ points: bonus.points - 1 });
  }

  function incWithValue(num) {
    setbonus({ points: Number(bonus.points) + Number(num) });
  }

  return (
    <>
      <h4>points : {bonus.points}</h4>
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
        type="text"
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

export default Bonus;
