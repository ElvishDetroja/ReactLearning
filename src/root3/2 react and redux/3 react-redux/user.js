import React from "react";
import { getUser } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.pending ? (
        <p>Loading...</p>
      ) : user.error ? (
        <p>{user.error}</p>
      ) : (
        <p>{user.data?.name}</p>
      )}

      <button
        onClick={() => {
          dispatch(getUser(9));
        }}
      >
        download data
      </button>
    </>
  );
}

export default User;