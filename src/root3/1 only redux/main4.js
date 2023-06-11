// const state = { account: { amount: 100 }, bonus: { points: 5 } };

// const newState = { account : state.account, bonus : { points : state.bonus.points + 1 } }

// const newState2 = { account : {amount : state.account.amount}, bonus : {...state.bonus} }

// console.log("state", state);
// console.log("newState", newState);
// console.log("newState2", newState2);

// state.account.amount = 900;
// state.bonus.points = 90;

// console.log("state", state);
// console.log("newState", newState);
// console.log("newState2", newState2);

// state nested thase tyare mutability achieve karvi hard thai jase.
// tethi reducer simple rahevo joiye. ane reducer ne simple rakhva ghana badha reducer banava padse.

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

//
//
// const variable
const inc = "inc";
const dec = "dec";
const incByNum = "incByNum";
const decByNum = "decByNum";
const decBonus = "bonus/decrement";

const getUserFulFilled = "getUserFulFilled";
const getUserRejected = "getUserRejected";
const getUserPending = "getUserPending";

// store
const store = createStore(
  combineReducers({ account: accountReducer, bonus: bonusReducer }),
  applyMiddleware(logger.default, thunk.default)
);

//
//
// reducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByNum:
      return { amount: state.amount + action.payload };
    case decByNum:
      return { amount: state.amount - action.payload };

    case getUserFulFilled:
      return { ...state, pending: false, amount: action.payload };
    case getUserRejected:
      return { ...state, pending: false, error: action.error };
    case getUserPending:
      return { ...state, pending: true };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 1 }, action) {
  switch (action.type) {
    case inc:
      return { points: state.points + 1 };
    case dec:
      return { points: state.points - 1 };
    case incByNum:
      if (action.payload > 100) {
        return { points: state.points + action.payload };
      } else {
        return state;
      }
    case decByNum:
      return { points: state.points - action.payload };
    case decBonus:
      return { points: state.points - 1 };
    default:
      return state;
  }
}

//
//
// action creaters
function increment() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}

function incrementByNumber(value) {
  return { type: incByNum, payload: value };
}

async function decrementByNumber() {
  const { data } = await axios.get("http://localhost:3000/accounts/1");
  return { type: decByNum, payload: data.amount };
}

function decrementBonus() {
  return { type: decBonus };
}

function getUserPendingfunc() {
  return { type: getUserPending };
}

function getUserFulFilledfunc(amount) {
  return { type: getUserFulFilled, payload: amount };
}

function getUserRejectedfunc(err) {
  return { type: getUserRejected, error: err };
}

function getUser(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(getUserPendingfunc());
      const { data } = await axios.get(`http://localhost:3000/account/${id}`);
      dispatch(getUserFulFilledfunc(data.amount));
    } catch (error) {
      dispatch(getUserRejectedfunc(error.message));
    }
  };
}

//
//
//
//

setTimeout(() => {
  //   store.dispatch(increment());
  //   store.dispatch(incrementByNumber(101));
  //   store.dispatch(decrementBonus());
  store.dispatch(getUser(1));
}, 5000);

// { account: { amount: 1 }, bonus: { points: 1 } }
// console ma je state ave che te global che.

// bonus: { points: 1 }
// atli je state che te khali koi ek reducer ni state che.
// tethi easily state ne change kari sakay.

// bonus na reducer ma bonus ni state j change thai sake.
// bonus na reducer ma account na base pr decision lai sakay. pan account ni state change no thai sake.

// jo action.type same j hase to te bija reducer no je case hase te pan run kari lese.
