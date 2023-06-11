import React from "react";
import Account from "./account";
import Bonus from "./bonus";
import {accountReducer, bonusReducer} from "./../2 with redux/reducers"
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

function App2() {

  const store = createStore(
    combineReducers({ account: accountReducer, bonus: bonusReducer }),
    applyMiddleware(logger, thunk)
  );

  return (
    <>
      <h1>with redux</h1>
      <Account store={store} />
      <Bonus store={store} />
      <hr />
    </>
  );
}

export default App2;


// jyare increment thay che tyare store no state variable change thay che
// but react no state variable change nathi thato aetle page pan render thatu nathi.
// to have aevu karvu pade ke redux no state change thay to react no state pan change thavo pade.
// ana solution mate aetle ke redux ne react sathe link karva mate react-redux libray. npm i react-redux
// anathi state an dispatch ne easily access kari sakay.