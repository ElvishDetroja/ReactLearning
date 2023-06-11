import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserById} from "./slices/userSlice"


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
          dispatch(fetchUserById(9));
        }}
      >
        download data
      </button>
    </>
  );
}

export default User;
