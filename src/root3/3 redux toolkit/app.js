import React from "react";
import Account from "./account";
import Bonus from "./bonus";
import User from "./user";
import Reward from "./reward";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./slices/accountSlice";
import bonusReducer from "./slices/bonusSlice";
import rewardReducer from "./slices/rewardReducer";
import userReducer from "./slices/userSlice";

function App() {
  const store = configureStore({
    reducer: {
      account: accountReducer,
      bonus: bonusReducer,
      reward: rewardReducer,
      user : userReducer
    },
  });

  return (
    <>
      <Provider store={store}>
        <Account />
        <Reward />
        <Bonus />
        <User />
      </Provider>
    </>
  );
}

export default App;








// accountSlice : redux-toolkit no use karyo, ahi action, reducer and constant ne alag thi banava ni jarur nathi, slice namni aek j file ma badhu avi jase.

// rewardReducer : createAction and createReducer ni madad thi aek j file ma bane banavyu.

// bonusSlice : accountSlice and rewardReducer ni method ne add kari aetle ke aevu karvu che ke jyare account ma 100 amount thi vadhu add thay to 1 point bonus ma add karvo.
// aetle ke bija reducer no reference leva mate createAction and extraReducers no use karyo.

// useSlice : api ne fetch karvi hoy tyare redux-toolkit thi createAsyncThunk thi api ne easily call kari sakay.