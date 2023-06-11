import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// const variable
const decByNum = "decByNum";

// store
const store = createStore(reducer, applyMiddleware(logger.default));

// redux-logger library logs actions in developer console, giving traceable stack of user actions. 

// have store.subscribe ni jarur nathi, applyMiddleware no use thay che.
// dispatch and reducer ni vache je che te middleware che.
// node ma middleware use thay che aetle default no use karvo padse.

//
// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type == "increment") {
    return { amount: state.amount + 1 };
  }
  if (action.type == "decrement") {
    return { amount: state.amount - 1 };
  }
  if (action.type == "incByNum") {
    return { amount: state.amount + action.payload };
  }
  if (action.type == decByNum) {
    return { amount: state.amount - action.payload };
  }
  return state;
}

//
//
// action creaters

function decrement() {
  return { type: "decrement" };
}

function incrementByNumber() {
  return { type: "incByNum", payload: 2 };
}

function decrementByNumber() {
  return { type: decByNum, payload: 2 };
}

setInterval(() => {
  //   store.dispatch({ type: "increment" });
  //   store.dispatch(decrement());
  //   store.dispatch(incrementByNumber());
  store.dispatch(decrementByNumber());
}, 5000);

// 
// 
// 
// 

// stae, reducer and dispatch store ma j che.
// action ne apne bahar define karel che.