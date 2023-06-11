import React from "react";
import Account from "./account";
import Bonus from "./bonus";
import User from './user';
import { accountReducer, bonusReducer, userReducer } from "./../3 react-redux/reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

function App3() {
  const store = createStore(
    combineReducers({ account: accountReducer, bonus: bonusReducer, user: userReducer }),
    applyMiddleware(logger, thunk)
  );

  return (
    <>
      <Provider store={store}>
        <h1>with react-redux</h1>
        <Account />
        <Bonus /><br /><hr />
        <User />
      </Provider>
      <hr />
    </>
  );
}

export default App3;

